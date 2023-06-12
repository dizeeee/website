<script lang="ts">
	import AnimatedDivider from '$lib/animatedDivider.svelte';

	function remToPx(rem: number) {
		return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
	}

	function scrollIntoView(ev: MouseEvent) {
		const target = ev.target as HTMLAnchorElement;
		const href = target.getAttribute('href');
		if (!href) return;
		const element = document.querySelector(href);
		if (!element) return;
		var headerOffset = remToPx(8);
		var elementPosition = element.getBoundingClientRect().top;
		var offsetPosition = elementPosition + window.pageYOffset - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth'
		});
	}
</script>

<!-- navbar -->
<nav
	class="fixed top-0 z-50 m-4 space-x-3 rounded-full px-6 py-4 mix-blend-difference brightness-125 backdrop-blur-sm before:fixed before:inset-0 before:-m-0.5 before:rounded-full before:border-2 before:border-black"
>
	<a href="#about" class="invert hover:underline" on:click|preventDefault={scrollIntoView}>About</a>
	<a href="#contact" class="invert hover:underline" on:click|preventDefault={scrollIntoView}
		>Contact</a
	>
	<!-- <a href="blog" class="hover:underline">Blog</a> -->
</nav>

<!-- header -->
<div class="relative flex h-[100svh] w-full items-center justify-center bg-black text-white">
	<div class="flex flex-col items-center space-y-2">
		<h1 class="text-center">Jack Malcom</h1>
		<h2 class="text-center">Software Engineer</h2>
	</div>

	<div class="absolute bottom-[5%]">
		<AnimatedDivider />
	</div>
	<div class="absolute bottom-0 flex h-[5%] w-full justify-center bg-white" />
</div>

<!-- content -->
<div class="flex justify-center bg-white">
	<div class="flex min-h-[100svh] max-w-4xl flex-col p-4" id="about">
		<section>
			<section>
				<h3>Hey there!</h3>
				<p>
					I'm Jack, a software engineer based in Fayetteville, AR. I graduated from University of
					Arkansas with a Computer Science BS, and I'm currently working at Bounteous as a developer
					on the Cloud Engineering Security team.
				</p>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab quaerat eum illum tempore
					pariatur eaque natus accusamus, ratione aspernatur cupiditate dolore quia labore
					perferendis ducimus harum explicabo voluptates! Tempore, aliquid!
				</p>
			</section>
		</section>

		<section>
			<h3>Where I've been</h3>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<h4>Bounteous</h4>
					<span class="text-right"><em>March&nbsp;2022 - Present</em></span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit accusamus
					officiis eligendi nobis doloremque placeat, consectetur aperiam tempora ab cupiditate
					omnis veritatis adipisci velit tempore maxime a, ipsum iure. Enim, excepturi voluptatum
					earum sapiente consequatur ea ratione iure expedita obcaecati dolore doloribus sequi
					quibusdam perferendis labore ipsum non fugit quae eum aspernatur quo saepe. Ut ratione
					quidem eum amet.
				</p>
			</section>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<h4>Tesseract Ventures</h4>
					<span class="text-right"><em>September&nbsp;2021 - December&nbsp;2021</em></span>
				</div>
				<p>
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum, tempora aliquam magnam
					blanditiis et inventore nesciunt tenetur, non laborum enim doloribus reiciendis fugit
					quasi provident sed impedit maiores voluptate explicabo.
				</p>
				<p>
					Repellendus consectetur expedita quas. Nam unde dolorem nostrum eos, ducimus mollitia
					placeat soluta illum id vel accusamus totam beatae quam voluptates rerum provident ratione
					commodi quia. Illum unde placeat quis.
				</p>
			</section>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<h4>SupplyPike</h4>
					<span class="text-right"><em>May&nbsp;2021 - September&nbsp;2021</em></span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quis aspernatur voluptatem
					corrupti dicta quas, id eum explicabo vel error aliquam, unde consectetur, repellendus
					praesentium voluptates! Odit cum doloremque consequuntur.
				</p>
			</section>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<h4>Affirma</h4>
					<span class="text-right"><em>October&nbsp;2020 - April&nbsp;2021</em></span>
				</div>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum ut perferendis
					enim! Corrupti dolorem incidunt nisi, delectus neque, eum quae vero repudiandae, ipsam
					sint aspernatur placeat illo adipisci hic?
				</p>
			</section>
		</section>
	</div>
</div>

<style lang="postcss">
	h1 {
		@apply font-header text-5xl font-black sm:text-5xl md:text-6xl;
	}

	h2 {
		@apply font-header text-2xl md:text-3xl;
	}

	h3 {
		@apply pb-4 font-header text-3xl md:text-4xl;
	}

	h4 {
		@apply font-header text-xl md:text-2xl;
	}

	section {
		@apply pb-4;
	}

	p {
		@apply pb-4;
	}
</style>
