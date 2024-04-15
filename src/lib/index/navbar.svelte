<script lang="ts">
	import { scrollTo } from '$lib/helper';

	let y = 0;
	let navbar: HTMLElement;

	function fadeIn(event: any) {
		// convert y to viewport percentage
		let yvp = (y / window.innerHeight) * 100;
		navbar.classList.toggle('dark', yvp < 80);
		navbar.classList.toggle('light', yvp >= 80);
	}
</script>

<svelte:window bind:scrollY={y} on:scroll={fadeIn} />

<nav
	bind:this={navbar}
	class="light dark fixed left-0 top-0 z-50 m-4 space-x-4 rounded-full px-6 py-4 transition delay-[25] ease-in-out"
>
	<a
		href="#about"
		class="decoration-2 underline-offset-2 hover:underline"
		aria-label="Scroll to the about section"
		on:click|preventDefault={scrollTo}
		>About
	</a>
	<a
		href="#contact"
		class="decoration-2 underline-offset-2 hover:underline"
		aria-label="Scroll to the contact section"
		on:click|preventDefault={scrollTo}
	>
		Contact
	</a>
	<!-- <a href="blog" class="hover:underline">Blog</a> -->
</nav>

<style lang="postcss">
	.light {
		@apply border-2 border-black text-black brightness-110 backdrop-blur-md;
	}

	.dark {
		@apply text-white border-2 border-transparent;
	}
</style>
