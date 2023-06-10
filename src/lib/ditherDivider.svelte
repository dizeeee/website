<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;
	let gl: WebGLRenderingContext;
	let program: WebGLProgram;
	let positionBuffer: WebGLBuffer;
	let width = 0;
	let height = 0;

	const vertexShaderSource = `#version 300 es
in vec2 a_position;

void main() {
  gl_Position = vec4(a_position, 0.0, 1.0);
}
    `;

	let fragmentShaderSource = `#version 300 es
precision lowp float;

uniform vec2 u_resolution;
uniform float u_time;

out vec4 fragColor;

float variance(float x, int amount) {
	float time = u_time;
	
	float result = 0.0;
	for (int i = 1; i < amount; i++) {
		result += sin(x / float(i));
	}
	return result/float(amount);
}

float wave(float x, float speed) {
	float time = u_time * speed;

	// offset starting position, kinda random
	float offset = 91.0;

	// setup
	float base = sin(x + time + speed * offset);
	float vary = variance(x + time, 10);
	
	// add variance
	base += vary;
	// base /= variance(x + time, 10) + 2.0;

	// fix range
	base /= 2.0;
	base += 1.0;
	return base / 3.0;
}

vec3 colorWaves(vec2 st, float time) {
	vec3 color = vec3(0.0);
	
	for (int i = 0; i < 3; i++) {
		if(st.y < wave(st.x, float(i)/3.0)) {
			color[i] = 1.0;
		}
	}

	return color;
}

void main() {
	vec2 aspectRatio = vec2(u_resolution.x / u_resolution.y, 1.0);
	vec2 st = (gl_FragCoord.xy / u_resolution.xy)* aspectRatio;

	vec3 color = colorWaves(st, u_time);

	fragColor = vec4(color, 1.0);
}`;

	onMount(() => {
		resizeCanvas();

		gl = canvas.getContext('webgl2')!;
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

		draw();
	});

	function resizeCanvas() {
		width = document.body.clientWidth;
		height = document.body.clientHeight / 20;
	}
</script>

<svelte:window on:resize={resizeCanvas} />

<canvas bind:this={canvas} {width} {height} class="w-full" />
