<script lang="ts">
	import springPress, { horizontalSlide } from '$lib/animationActions';
	import postcss from 'postcss';
	import { Icon } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	export let title = '';
	export let link = '';
	export let icon = '';
	export let background = '';
</script>

<a
	use:springPress
	in:slide={{ duration: 100, delay: 100 }}
	out:slide={{ duration: 100 }}
	href="/api/{link}"
	class="square h-full p-5 rounded-lg w-full relative"
	style="background: {background};}"
>
	<h1 transition:slide={{ duration: 100, delay: 100 }} class="h-full w-full leading-10">
		{title}
	</h1>
	<div transition:slide class="h-auto w-auto">
		<Icon src={icon} color="white" size="110px" class={'opacity-20 absolute bottom-[1rem] right-[1rem] z-0'} />
	</div>
</a>

<style lang="postcss">
	.square {
		width: 100%;
		aspect-ratio: 1/1;
	}
	h1 {
		font-size: 40px;
		font-weight: 600;
	}
</style>
