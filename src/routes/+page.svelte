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
<div class="mx-auto flex max-w-7xl">
	<nav
		class="fixed top-0 z-50 m-4 space-x-4 rounded-full px-6 py-4 mix-blend-difference brightness-125 backdrop-blur-sm before:fixed before:inset-0 before:-m-0.5 before:rounded-full before:border-2 before:border-black"
	>
		<a href="#about" class="invert hover:underline" on:click|preventDefault={scrollIntoView}
			>About</a
		>
		<a href="#contact" class="invert hover:underline" on:click|preventDefault={scrollIntoView}>
			Contact
		</a>
		<!-- <a href="blog" class="hover:underline">Blog</a> -->
	</nav>
</div>

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
	<div class="flex min-h-[100svh] max-w-4xl flex-col p-4">
		<section id="about">
			<section>
				<h3>Hey there!</h3>
				<p>
					I'm Jack, a software engineer based in Fayetteville, AR. I graduated from University of
					Arkansas with a Computer Science BS, and I'm currently working at Bounteous as a developer
					on the Cloud Engineering Security team.
				</p>
			</section>
		</section>

		<section>
			<h3>Where I've been</h3>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<div class="flex flex-col">
						<h4>Bounteous</h4>
						<em class="text-sm">Associate DevOps Architect</em>
					</div>
					<span class="text-right"><em>March&nbsp;2022 - Present</em></span>
				</div>
				<p>
					At Bounteous, I work with the Cloud Engineering Security to develop tools to make
					deployments smoother and data more accessible. I started by redesigning the tool we use to
					deploy the frontends and APIs that many of the major fast food chains in the US rely on
					using Angular and FastAPI. Currently, I'm working on a status page that makes it easier
					for our non technical clients to view and understand their AWS infrastructure.
				</p>
			</section>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<div class="flex flex-col">
						<h4>Tesseract Ventures</h4>
						<em class="text-sm">Full Stack Developer</em>
					</div>
					<span class="text-right"><em>September&nbsp;2021 - December&nbsp;2021</em></span>
				</div>
				<p>
					While working as an intern Tesseract, I worked on an interactive presentation platform
					that allows users to drag information around as windows, and quickly find data they're
					looking for. Most of the work I did was centered around improving window management,
					including being able to tile, search, and filter windows based on the data inside them. I
					also used WebSockets to stream data to the mobile web version of the platform, allowing
					several users to view and interact with the same data at the same time.
				</p>
			</section>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<div class="flex flex-col">
						<h4>SupplyPike</h4>
						<em class="text-sm">Frontend Developer</em>
					</div>
					<span class="text-right"><em>May&nbsp;2021 - September&nbsp;2021</em></span>
				</div>
				<p>
					As an intern at SupplyPike, I got to work on the newly formed SDI team. Our goal at the
					time was to simplify and ultimately replace the tools that we used to scrape and process
					files for our clients. My main project was a React-based frontend tool that allowed us and
					our clients to view what files we had ingested, where the file was in our processing
					pipeline, and what data we had extracted from the file. I also worked on some of the
					backend code, adding new scrapers to help us reach parity with our existing services.
				</p>
				<p>
					The frontend work I did used a new internal React component library. One of the big goals
					was to make the tool I was working on the first to be almost entirely based on that
					library. As a result, I got to help steer some of the direction of the project, while also
					have the opportunity to work with incredibly talented designers.
				</p>
			</section>

			<section>
				<div class="flex items-center justify-between space-x-4 pb-4">
					<div class="flex flex-col">
						<h4>Affirma</h4>
						<em class="text-sm">Frontend Developer</em>
					</div>
					<span class="text-right"><em>October&nbsp;2020 - April&nbsp;2021</em></span>
				</div>
				<p>
					My first internship was at Affirma, working as a frontend developer. The majority of my
					work centered around updating websites for our clients with modern designs. Essentially, I
					was taking websites from 2002 and pulling them out of the stone age. All of this work was
					done in existing CMS systems, such as CraftCMS and Drupal, and changes made were mostly
					done with CSS.
				</p>
			</section>
		</section>

		<section>
			<h3>A very specific set of skills</h3>
			<p>
				I got into computers as a kid by learning how to host Minecraft servers for friends. I
				eventually learned that you could do the same thing by putting Ubuntu on an old computer,
				and not only would it run better, I could also configure it to restart if there was a crash!
				After that, it was all downhill from there. I've worked with a ton of different languages
				and tools, and if I don't know something, I can learn it.
			</p>

			<h4>Languages</h4>
			<p>Javascript - Typescript - Python - Java - Rust - Dart - LaTeX - GLSL</p>

			<h4>Frameworks</h4>
			<p>Node.js - React - Angular - FastAPI - Express - NestJS - Flutter - Svelte</p>

			<h4>Databases</h4>
			<p>PostgreSQL - SQLite - DynamoDB</p>

			<h4>Tools</h4>
			<p>Node.js - Git - Docker - AWS - <a href="https://archlinux.org/">Linux</a></p>
		</section>

		<section>
			<h3>Things I like working on</h3>

			<section>
				<h4>MTG Inventory</h4>
				<p>
					My current hobby project is a system to help me keep inventory of my Magic: The Gathering
					cards. It's similar to services like <a href="https://deckbox.org/">Deckbox</a>, and I'm
					building it using <a href="https://kit.svelte.dev/">SvelteKit</a>,
					<a href="https://neon.tech/">Postgres</a>, <a href="https://turso.tech/">SQLite</a>, and
					<a href="https://vercel.com/">Vercel</a>. Currently, I'm working on improving database
					structure so I can make complicated queries that other inventory sites can't.
				</p>
			</section>

			<section>
				<h4>J.B. Hunt Hackathon</h4>
				<p>
					I participated in every hackathon J.B. Hunt hosted on campus that I was able to and had a
					ton of fun doin it. Our team even won first place one year with an Android alarm clock app
					that shoots you with a Nerf gun to wake you up. (the theme was smart homes) As a graduate,
					I still participate as a mentor every semester, and I'm always blown away by the great
					ideas students manage to come up with.
				</p>
			</section>

			<section>
				<h4><a href="https://discord.gg/6KTkmta">Error 479</a></h4>
				<p>
					Error 479 is a Discord server I started in college to give CSCE students a place find each
					other and talk. Over time, it has grown into the largest tech based Discord server in the
					area.
				</p>
			</section>
		</section>

		<section id="contact">
			<h3>How to reach me</h3>
			<p>
				Want to talk? Feel free to send me an email at <em>me(at)jackmal(dot)com</em>, message me on
				<a href="https://www.linkedin.com/in/jack-malcom-0b5870171/">LinkedIn</a>, or check out the
				links below.
			</p>
			<div class="flex h-16 items-center justify-center space-x-4 pb-4 text-4xl">
				<a href="https://www.linkedin.com/in/jack-malcom-0b5870171/">
					<i class="fa-brands fa-linkedin hover:contrast-50" />
				</a>
				<a href="https://github.com/dizeeee">
					<i class="fa-brands fa-github hover:contrast-50" />
				</a>
			</div>
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
		@apply pb-2 font-header text-xl md:text-2xl;
	}

	section {
		@apply pb-4;
	}

	p {
		@apply pb-4;
	}

	:not(nav) > a {
		@apply underline transition delay-75 ease-linear hover:contrast-50;
	}
</style>
