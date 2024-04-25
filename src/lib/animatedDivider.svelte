<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let gl: WebGL2RenderingContext;
	let program: WebGLProgram;
	let positionBuffer: WebGLBuffer;
	let width = 0;
	let height = 0;

	const vertexShaderSource = `#version 300 es
in vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}`;

	let fragmentShaderSource = `#version 300 es
precision lowp float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 fragColor;

#define PI 3.1415926538

// return a random number between 0 and 1
float rand(int x, int seed){
	return fract(sin(float(x+seed)*1.0)*1.0);
}

float rand(int x){
	return rand(x, x);
}

float curve(float x, float y, float t) {
	return mix(x, y, t*t*(3.0-2.0*t));
}

vec2 curve(vec2 x, vec2 y, float t) {
	return vec2(
		curve(x.x, y.x, t),
		curve(x.y, y.y, t)
	);
}

float wave(
	vec2 st,
	float width, // width of individual waves
	float interval, // time between waves
	int seed
) {
	float timeOffset = rand(seed+1);
	float time = u_time + 100.5*timeOffset;
	int pos = int(st.x/width);

	vec2 currentPos = vec2(
		rand(pos, seed + int(time/interval)),
		rand(pos+1, seed + int(time/interval))
	);

	vec2 nextPos = vec2(
		rand(pos, seed + int(time/interval) + 1),
		rand(pos+1, seed + int(time/interval) + 1)
	);

	vec2 tweenLerp = curve(currentPos, nextPos, st.x/width - float(pos));

	return mix(tweenLerp.x, tweenLerp.y, mod(time, interval) / interval );
}

void main() {
	vec2 aspectRatio = vec2(u_resolution.x / u_resolution.y, 1.0);
	vec2 st = (gl_FragCoord.xy / u_resolution.xy) * aspectRatio;

	vec3 color = vec3(0.0);

	for (int i = 0; i < 3; i++) {
		color[i] = smoothstep(0.0, 0.025, wave(st, 5., 25., int(100.*rand(int(i+2)))) - st.y);
	}

	fragColor = vec4(color, 1.0);
}`;

	onMount(() => {
		gl = canvas.getContext('webgl2', { antialias: true })!;
		if (!gl) throw new Error('Could not get WebGL context');

		// create vertex shader
		const vertexShader = gl.createShader(gl.VERTEX_SHADER);
		if (!vertexShader) throw new Error('Could not create vertex shader');
		gl.shaderSource(vertexShader, vertexShaderSource);
		gl.compileShader(vertexShader);
		if (!gl.getShaderParameter(vertexShader, gl.COMPILE_STATUS)) {
			throw new Error(`Could not compile vertex shader: ${gl.getShaderInfoLog(vertexShader)}`);
		}

		// create fragment shader
		const fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
		if (!fragmentShader) throw new Error('Could not create fragment shader');
		gl.shaderSource(fragmentShader, fragmentShaderSource);
		gl.compileShader(fragmentShader);
		if (!gl.getShaderParameter(fragmentShader, gl.COMPILE_STATUS)) {
			throw new Error(`Could not compile fragment shader: ${gl.getShaderInfoLog(fragmentShader)}`);
		}

		// create program
		program = gl.createProgram()!;
		gl.attachShader(program, vertexShader);
		gl.attachShader(program, fragmentShader);
		gl.linkProgram(program);
		if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
			throw new Error(`Could not link program: ${gl.getProgramInfoLog(program)}`);
		}

		// create position buffer
		positionBuffer = gl.createBuffer()!;
		gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
		gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);

		// set up attributes and uniforms
		const positionAttributeLocation = gl.getAttribLocation(program, 'a_position');
		const resolutionUniformLocation = gl.getUniformLocation(program, 'u_resolution');
		const timeUniformLocation = gl.getUniformLocation(program, 'u_time');

		// draw loop
		let time = 0;
		function draw() {
			requestAnimationFrame(draw);

			// resize viewport
			gl.viewport(0, 0, width, height);

			// clear canvas
			gl.clearColor(0, 0, 0, 1);
			gl.clear(gl.COLOR_BUFFER_BIT);

			// use program and set uniforms
			gl.useProgram(program);
			gl.uniform2f(resolutionUniformLocation, width, height);
			gl.uniform1f(timeUniformLocation, time);

			// set up position attribute
			gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
			gl.enableVertexAttribArray(positionAttributeLocation);
			gl.vertexAttribPointer(positionAttributeLocation, 2, gl.FLOAT, false, 0, 0);

			// draw triangles
			gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);

			time += 0.01;
		}

		resizeCanvas();
		draw();
	});

	function resizeCanvas() {
		width = document.body.clientWidth;
		height = document.body.clientHeight / 20;
	}
</script>

<svelte:window on:resize={resizeCanvas} />

<canvas bind:this={canvas} {width} {height} class="w-screen bg-black" />
