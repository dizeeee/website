<script lang="ts">
	import '$lib/app.css';
	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();
</script>

<svelte:head>
	<title>Jack Malcom</title>
	<meta name="description" content="Personal website for Jack Malcom" />
	<meta
		name="keywords"
		content="portfolio resume software engineer react angular node.js java spring boot rust"
	/>
</svelte:head>

{@render children?.()}
