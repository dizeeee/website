<script lang="ts">
	import DitherDivider from '$lib/ditherDivider.svelte';
</script>

<nav class="invert-text-color fixed top-0 z-50 flex space-x-4 p-10">
	<a href="#about" class="hover:underline">About</a>
	<a href="#contact" class="hover:underline">Contact</a>
	<!-- <a href="blog" class="hover:underline">Blog</a> -->
</nav>

<!-- Header -->
<div class="relative flex h-[100svh] w-full items-center justify-center bg-black text-white">
	<div class="flex flex-col items-center space-y-2">
		<h1 class="text-center">Jack Malcom</h1>
		<h2 class="text-center">Software Engineer</h2>
	</div>

	<div class="absolute bottom-[5%]">
		<DitherDivider />
	</div>
	<div class="absolute bottom-0 flex h-[5%] w-full justify-center bg-white" />
</div>

<!-- Content -->
<div class="flex justify-center bg-white">
	<div class="flex min-h-[100svh] max-w-4xl flex-col p-4" id="about">
		<section>
			<h3>Hey there!</h3>
			<p>
				I'm Jack, a software engineer based in Fayetteville, AR. I graduated from University of
				Arkansas with a Computer Science BS, and I'm currently working at Bounteous as a developer
				on the Cloud Engineering Security team.
			</p>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat eum illum tempore
				pariatur eaque natus accusamus, ratione aspernatur cupiditate dolore quia labore perferendis
				ducimus harum explicabo voluptates! Tempore, aliquid!
			</p>
		</section>

		<section>
			<h3>Where I've been</h3>

			<div class="flex justify-between">
				<h4>Bounteous</h4>
				<span><em>March 2022 - Present</em></span>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit accusamus
				officiis eligendi nobis doloremque placeat, consectetur aperiam tempora ab cupiditate omnis
				veritatis adipisci velit tempore maxime a, ipsum iure. Enim, excepturi voluptatum earum
				sapiente consequatur ea ratione iure expedita obcaecati dolore doloribus sequi quibusdam
				perferendis labore ipsum non fugit quae eum aspernatur quo saepe. Ut ratione quidem eum
				amet.
			</p>

			<div class="flex justify-between">
				<h4>Tesseract Ventures</h4>
				<span><em>September 2021 - December 2021</em></span>
			</div>
			<p>
				Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tempora aliquam magnam
				blanditiis et inventore nesciunt tenetur, non laborum enim doloribus reiciendis fugit quasi
				provident sed impedit maiores voluptate explicabo.
			</p>
			<p>
				Repellendus consectetur expedita quas. Nam unde dolorem nostrum eos, ducimus mollitia
				placeat soluta illum id vel accusamus totam beatae quam voluptates rerum provident ratione
				commodi quia. Illum unde placeat quis.
			</p>

			<div class="flex justify-between">
				<h4>SupplyPike</h4>
				<span><em>May 2021 - September 2021</em></span>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis aspernatur voluptatem
				corrupti dicta quas, id eum explicabo vel error aliquam, unde consectetur, repellendus
				praesentium voluptates! Odit cum doloremque consequuntur.
			</p>

			<div class="flex justify-between">
				<h4>Affirma</h4>
				<span><em>October 2020 - April 2021</em></span>
			</div>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum ut perferendis
				enim! Corrupti dolorem incidunt nisi, delectus neque, eum quae vero repudiandae, ipsam sint
				aspernatur placeat illo adipisci hic?
			</p>
		</section>
	</div>
</div>

<style lang="postcss">
	.invert-text-color {
		filter: invert(1);
		mix-blend-mode: difference;
	}

	h1 {
		@apply font-header text-6xl font-black;
	}

	h2 {
		@apply font-header text-3xl;
	}

	h3 {
		@apply pb-4 font-header text-4xl;
	}

	h4 {
		@apply pb-4 font-header text-2xl;
	}

	section {
		@apply pb-8;
	}

	p {
		@apply pb-4;
	}
</style>
