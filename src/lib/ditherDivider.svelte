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

bool dither(float value, vec2 pos) {
	int bayerFilter[16] = int[16](
		0,  8,  2,  10,
		12, 4,  14, 6,
		3,  11, 1,  9,
		15, 7,  13, 5
	);

	int x = int(mod(pos.x, 4.0));
	int y = int(mod(pos.y, 4.0));
	int index = y * 4 + x;
	int threshold = bayerFilter[index];

	return value > float(threshold) / 16.0;
}

float mapRange(float value, float inputMin, float inputMax, float outputMin, float outputMax) {
  float t = (value - inputMin) / (inputMax - inputMin);
  return mix(outputMin, outputMax, t);
}

float stan(float x) {
  	return clamp(tan(x), -10.0, 10.0);
}

float sec(float x) {
	return clamp(1.0 / cos(x), -10.0, 10.0);
}

float csc(float x) {
	return clamp(1.0 / sin(x), -10.0, 10.0);
}

float randomWave(float x, float y, float time) {
  float speed = 1.0;
  time *= speed;

  float wave = stan(time + x * speed) + csc(time + x * speed) + sec(time + x * speed) / sec(time + x * speed) + csc(time + x * speed);

  return wave/10.0;
}

void main() {
	vec2 aspectRatio = vec2(u_resolution.x / u_resolution.y, 1.0);
	vec2 st = (gl_FragCoord.xy / u_resolution.xy); // * aspectRatio;

	float blackWave = abs(randomWave(st.x, st.y, sin(-u_time)));
	float whiteWave = abs(randomWave(st.x, st.y, cos(u_time)));

	blackWave = mapRange(blackWave, -1.0, 1.0, 0.0, 0.5);
	whiteWave = mapRange(whiteWave, -1.0, 1.0, 0.0, 0.5);

	if (st.y > blackWave + whiteWave) {
		fragColor = vec4(0.0, 0.0, 0.0, 1.0);
	} else if (st.y < whiteWave) {
		fragColor = vec4(1.0, 1.0, 1.0, 1.0);
	} else {
		float gray = 1.0 - ((st.y - whiteWave) / blackWave);
		if(dither(gray, gl_FragCoord.xy)) {
			gray = 1.0;
		} else {
			gray = 0.0;
		}
		fragColor = vec4(gray, gray, gray, 1.0);
	}
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
		height = document.body.clientHeight / 10;
	}
</script>

<svelte:window on:resize={resizeCanvas} />

<canvas bind:this={canvas} {width} {height} class="w-full" />
