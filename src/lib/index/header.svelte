<script>
	import AnimatedDivider from '$lib/animatedDivider.svelte';
</script>

<div class="flex h-[100svh] w-full items-center justify-center bg-black text-white">
	<div
		class="z-10 flex flex-col items-center space-y-4"
		style="text-shadow: 0 .125rem .25rem rgba(0, 0, 0, 0.5);"
	>
		<h1 class="text-center">Jack Malcom</h1>
		<h2 class="text-center">Software Engineer</h2>
	</div>

	<div class="absolute bottom-[5%]">
		<AnimatedDivider />
	</div>
	<div class="absolute bottom-0 flex h-[5%] w-full justify-center bg-white" />
</div>

<style lang="postcss">
	h1 {
		@apply font-header text-5xl font-black sm:text-5xl md:text-6xl;
	}

	h2 {
		@apply font-header text-2xl md:text-3xl;
	}
</style>
