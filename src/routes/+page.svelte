<script lang="ts">
	import Navbar from '$lib/index/navbar.svelte';
	import Header from '$lib/index/header.svelte';
	import ResumeSection from '$lib/index/resumeSection.svelte';
	import CtaButton from '$lib/ctaButton.svelte';
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
					I'm Jack, a software engineer based in Fayetteville, AR. I majored in Computer
					Science at the University of Arkansas. I'm currently working at Walmart Global
					Tech as a Software Engineer, and I enjoy bouldering and playing Magic in my free
					time!
				</p>
			</section>
			<div class="mb-6 flex w-full justify-center">
				<CtaButton
					href="https://github.com/dizeeee/resume/blob/main/jackmalcom.pdf"
					text="Read my resume!"
				/>
			</div>
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
				layout and websocket systems. Most of my work was done in Typescript and React, along with
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
				short, I made websites look like they weren't taken directly out of the 90s."
			/>
		</section>

		<section>
			<h3>Skills</h3>
			<p>
				I've been tinkering with Linux for the better part of a decade, which means I've
				been exposed to a broad range of technologies. Here are some of the tools and
				languages I'm most comfortable with:
			</p>

			<section>
				<h4>Languages</h4>
				<p>Javascript / Typescript - Java - Python - GraphQL - Rust - Dart - LaTeX</p>

				<h4>Frameworks + Libraries</h4>
				<p>
					Spring Boot - React - Angular - FastAPI - Express - NestJS - Flutter - SvelteKit
				</p>

				<h4>Databases</h4>
				<p>PostgreSQL - Azure SQL - SQLite - DynamoDB - Convex</p>

				<h4>Tools</h4>
				<p>
					Docker - Git - <a href="https://archlinux.org/" aria-label="btw">Linux</a>
				</p>

				<h4>Cloud</h4>
				<p>AWS - Cloudflare - GCP - Vercel - Netlify - Fly - DigitalOcean</p>
			</section>
		</section>

		<section>
			<h3>Side projects</h3>

			<section>
				<h4>Climb Talks - <a href="https://hotdog.land/climb">Link</a></h4>
				<p>
					Northwest Arkansas has a small but strong developer community that regularly
					holds meetups. I wanted to put my own spin on the traditional tech meetup
					format, so I created Climb Talks after securing sponsorship from SupplyPike for
					the first event. Each event features two speakers giving quick presentations on
					hobbies or topics they're passionate about, followed by food and bouldering.
					After the success of the initial event, I secured additional sponsorship from
					Walmart for a three-event series. By hosting events right next to the University
					of Arkansas, we attract strong student turnout and introduce them to the local
					tech community.
				</p>
			</section>

			<section>
				<h4>Solvescapes - <a href="https://github.com/dizeeee/solvescapes">Repo</a></h4>

				<p>
					I enjoy playing Wordscapes with my family. It's a game where you unscramble
					words given a set of letters. Over a weekend, I built a solver that uses ADB and
					OCR to find answers and input them on my phone.
				</p>
			</section>

			<section>
				<h4>J.B. Hunt Hackathon Mentor</h4>
				<p>
					In college, I participated in the J.B. Hunt Hackathon every semester. It was a
					great way to push myself to learn new things, and my team even <a
						href="https://github.com/Team-Goose">won first place once</a
					>. Since I've graduated, I've continued to attend as a mentor, running
					workshops, and advising teams.
				</p>
			</section>

			<section>
				<h4>catbat - <a href="https://github.com/dizeeee/catbat">Repo</a></h4>

				<p>
					catbat is a basic CLI tool that shows battery info. I wrote it in Rust as an
					excuse to practice shipping and polishing something basic that I could put on <a
						href="https://crates.io/crates/catbat">crates.io</a
					>. Since then, it has actually been helpful in a few cases where I was on my
					laptop, and wasn't using a desktop environment.
				</p>
			</section>
		</section>

		<section id="contact">
			<h3>Contact</h3>
			<p>
				Want to talk? Feel free to send me an email at <em>jobs(at)jackmal(dot)com</em>,
				message me on
				<a
					href="https://www.linkedin.com/in/jack-malcom-0b5870171/"
					aria-label="My LinkedIn">LinkedIn</a
				>, or check out the links below.
			</p>
			<div class="flex h-16 items-center justify-center space-x-4 pb-4 text-4xl">
				<a
					href="https://www.linkedin.com/in/jack-malcom-0b5870171/"
					aria-label="My LinkedIn"
				>
					<i class="fa-brands fa-linkedin hover:contrast-50"></i>
				</a>
				<a href="https://github.com/dizeeee" aria-label="My GitHub">
					<i class="fa-brands fa-github hover:contrast-50"></i>
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
