<script lang="ts">
	interface Props {
		company?: string;
		title?: string;
		startDate?: string;
		endDate?: string;
		description?: string;
	}

	let {
		company = '',
		title = '',
		startDate = '',
		endDate = '',
		description = ''
	}: Props = $props();
</script>

<section>
	<div class="flex items-center justify-between space-x-4 pb-4">
		<div class="flex flex-col">
			<h4>{company}</h4>
			<em class="text-sm">{title}</em>
		</div>
		<span class="text-right"
			><em
				><span class="text-nowrap">{startDate}</span> -
				<span class="text-nowrap">{endDate}</span></em
			></span
		>
	</div>
	<p>
		{description}
	</p>
</section>

<style lang="postcss">
	h4 {
		@apply pb-2 font-header text-xl md:text-2xl;
	}

	section {
		@apply pb-4;
	}

	p {
		@apply pb-4;
	}
</style>
