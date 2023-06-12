<script lang="ts">
	import DitherDivider from '$lib/ditherDivider.svelte';
	import postcss from 'postcss';
</script>

<div class="invert-text-color sticky start-0 top-0 z-10 flex divide-x-4">
	<a href="#about" class="hover:underline">About</a>
	<a href="#contact" class="hover:underline">Contact</a>
	<!-- <a href="blog" class="hover:underline">Blog</a> -->
</div>

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
<div class="mx-auto min-h-[100svh] max-w-4xl p-4" id="about">
	<section>
		<h3>Hey there!</h3>
		<p>
			I'm Jack, a software engineer based in Fayetteville, AR. I graduated from University of
			Arkansas with a Computer Science BS, and I'm currently working at Bounteous as a developer on
			the Cloud Engineering Security team.
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
			At Bounteous, I've worked on a variety of projects, including a React-based web app for a
			healthcare client, a React Native app for a major airline, and a React-based web app for a
			telecommunications client. I've also worked on a few internal projects, including a
			React-based web app for managing AWS resources and a React-based web app for managing AWS
			security configuration.
		</p>
		<div class="flex justify-between">
			<h4>Tesseract Ventures</h4>
			<span><em>September 2021 - December 2021</em></span>
		</div>
		<p>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius natus aut provident rem? Alias
			consequuntur dolorum pariatur quod, vero illo velit est expedita molestias debitis aliquam, id
			qui! Voluptate, aliquid.
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
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum ut perferendis enim!
			Corrupti dolorem incidunt nisi, delectus neque, eum quae vero repudiandae, ipsam sint
			aspernatur placeat illo adipisci hic?
		</p>
	</section>
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
