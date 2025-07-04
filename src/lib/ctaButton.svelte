<script lang="ts">
	const { href, text } = $props();
</script>

<a
	{href}
	class="rounded-full border-2 border-black px-6 py-4 text-black transition delay-[50] ease-out hover:scale-125 hover:bg-black hover:text-white hover:shadow-md hover:shadow-zinc-500"
>
	{text}
</a>
