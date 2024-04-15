<script lang="ts">
	import '$lib/app.css';

	import { dev } from '$app/environment';
	import { inject } from '@vercel/analytics';

	inject({ mode: dev ? 'development' : 'production' });
</script>

<svelte:head>
	<title>Jack Malcom</title>
	<meta name="description" content="Personal website for Jack Malcom" />
	<meta name="keywords" content="portfolio resume software engineer react angular node.js java spring boot rust" />
</svelte:head>

<slot />
