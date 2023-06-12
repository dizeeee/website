<script lang="ts">
	import DitherDivider from '$lib/ditherDivider.svelte';
	import DownArrow from '$lib/downArrow.svg';
</script>

<div class="w-full h-screen flex items-center justify-center relative bg-black text-white">
	<div class="flex flex-col items-center space-y-2">
		<h1 class="font-header text-6xl font-black text-center">Jack Malcom</h1>
		<h2 class="font-header text-3xl text-center">Software Engineer</h2>
	</div>

	<div class="absolute bottom-[2%]">
		<DitherDivider />
	</div>
	<div class="absolute bottom-0 bg-white w-full h-[2%] flex justify-center">
		<!-- <img src={DownArrow} class="w-auto h-full pt-8 pb-12" /> -->
	</div>
</div>
<div>
	<h3 class="text-4xl font-header">Lorem ipsum dolor</h3>
	<p>
		Sit amet consectetur adipisicing elit. Quam atque, quod voluptatum totam labore magnam sunt,
		obcaecati dolore eveniet magni hic, impedit beatae illum facilis laborum veritatis provident
		aliquid ad.
	</p>
</div>
