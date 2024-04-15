<script lang="ts">
	import Navbar from '$lib/index/navbar.svelte';
	import Header from '$lib/index/header.svelte';
	import ResumeSection from '$lib/index/resumeSection.svelte';
</script>

<!-- navbar -->
<Navbar />

<!-- header -->
<Header />

<!-- content -->
<div class="flex justify-center bg-white">
	<div class="flex min-h-[100svh] max-w-4xl flex-col px-4 pb-32 pt-4">
		<section id="about">
			<section>
				<h3>Hey there!</h3>
				<p>
					I'm Jack, a software engineer based in Fayetteville, AR. I majored in Computer Science at
					the University of Arkansas, and I've been working in the industry for a couple years now.
					I'm currently working at Walmart Global Tech as a Software Engineer, and I love bouldering
					and playing Magic in my free time!
				</p>
			</section>
		</section>

		<section>
			<h3>Where I've been</h3>

			<ResumeSection
				company="Walmart Global Tech"
				title="Software Engineer III"
				startDate="July 2023"
				endDate="Present"
				description="I currently work in Health & Wellness, where I develop tools used to maintain Walmart's
				patient profile systems. Most of my work is in Spring Boot, but I also work with Rust and
				React."
			/>

			<ResumeSection
				company="Bounteous"
				title="Associate DevOps Architect"
				startDate="March 2022"
				endDate="July 2023"
				description="At Bounteous, I worked with the DevOps team to maintain tools that streamlined their AWS
				deployments. I also developed a status page product to allow clients to get real time,
				relevant data from their AWS accounts. This work was done using a combination of Angular,
				FastAPI, and CloudFormation."
			/>

			<ResumeSection
				company="Tesseract Ventures"
				title="Full Stack Developer - Intern"
				startDate="September 2021"
				endDate="December 2021"
				description="While at Tesseract, I worked on a presentation platform that enabled users to interact
				with the data in real time, on multiple devices. I was responsible for improving the
				layout and websocket systems. Most of my work was done in Typescript and React, as well as
				a research project using D-Bus."
			/>

			<ResumeSection
				company="SupplyPike"
				title="Frontend Developer - Intern"
				startDate="May 2021"
				endDate="September 2021"
				description="At SupplyPike, I was the main frontend developer on a new product designed to simplify a
				major document processing pipeline. I made contributions to repos built with React and
				Nest.js."
			/>

			<ResumeSection
				company="Affirma"
				title="Frontend Developer - Intern"
				startDate="October 2020"
				endDate="April 2021"
				description="During my time with Affirma, I modernized client websites using a variety of CMS systems.
				A majority of my time was spent on a project that used CraftCMS, React, and GraphQL. In
				short, I websites look like they weren't taken directly out of the 90s."
			/>
		</section>

		<section>
			<h3>A very particular set of skills</h3>
			<p>
				I've been tinkering with Linux for the better part of a decade, and I've picked up a wide
				range of skills as a result. Here's some of the tools and languages I'm most comfortable
				with:
			</p>

			<section>
				<h4>Languages</h4>
				<p>Javascript / Typescript - Java - Python - GraphQL - Rust - Dart - LaTeX</p>

				<h4>Frameworks + Libraries</h4>
				<p>Spring Boot - React - Angular - FastAPI - Express - NestJS - Flutter - SvelteKit</p>

				<h4>Databases</h4>
				<p>PostgreSQL - SQLite - DynamoDB</p>

				<h4>Tools</h4>
				<p>
					Docker - Git - <a href="https://archlinux.org/" aria-label="Arch BTW">Linux</a>
				</p>

				<h4>Cloud</h4>
				<p>AWS - GCP - Vercel - Netlify - Fly - DigitalOcean</p>
			</section>
		</section>

		<section>
			<h3>My hobby projects</h3>

			<section>
				<h4>MTG Inventory</h4>
				<p>
					My current hobby project is a system to help me keep inventory of my Magic: The Gathering
					cards. It's similar to services like <a
						href="https://deckbox.org/"
						aria-label="Deckbox.org">Deckbox</a
					>, and I'm building it using
					<a href="https://kit.svelte.dev/" aria-label="SvelteKit">SvelteKit</a>,
					<a href="https://neon.tech/" aria-label="Neon Postgres">Postgres</a>,
					<a href="https://turso.tech/" aria-label="Turso SQLite">SQLite</a>, and
					<a href="https://vercel.com/" aria-label="Vercel">Vercel</a>. Currently, I'm working on
					improving database structure so I can make complicated queries that other inventory sites
					can't.
				</p>
			</section>

			<section>
				<h4>J.B. Hunt Hackathon</h4>
				<p>
					While I was in college, I participated in every hackathon the computer science department
					held. It was an amazing learning experience, and I still attend as a mentor. You usually
					find me running workshops, as well as working with teams on their planning and
					presentation skills.
				</p>
			</section>

			<section>
				<h4><a href="https://discord.gg/6KTkmta" aria-label="Invite to Error 479">Error 479</a></h4>
				<p>
					Error 479 is a Discord server I started in college to give University of Arkansas CSCE
					students a place find each other and talk. Over time, it has grown into the largest tech
					based Discord server in Northwest Arkansas.
				</p>
			</section>
		</section>

		<section id="contact">
			<h3>Where to contact me</h3>
			<p>
				Want to talk? Feel free to send me an email at <em>jobs(at)jackmal(dot)com</em>, message me
				on
				<a href="https://www.linkedin.com/in/jack-malcom-0b5870171/" aria-label="My LinkedIn"
					>LinkedIn</a
				>, or check out the links below.
			</p>
			<div class="flex h-16 items-center justify-center space-x-4 pb-4 text-4xl">
				<a href="https://www.linkedin.com/in/jack-malcom-0b5870171/" aria-label="My LinkedIn">
					<i class="fa-brands fa-linkedin hover:contrast-50" />
				</a>
				<a href="https://github.com/dizeeee" aria-label="My GitHub">
					<i class="fa-brands fa-github hover:contrast-50" />
				</a>
			</div>
		</section>
	</div>
</div>

<style lang="postcss">
	h3 {
		@apply pb-6 font-header text-3xl md:text-4xl;
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

	/* Add underlines and subtle fade to gray on links */
	:not(nav) > a {
		@apply underline transition delay-[25] ease-linear hover:text-zinc-600;
	}
</style>
