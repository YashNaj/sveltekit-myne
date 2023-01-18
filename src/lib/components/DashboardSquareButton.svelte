<script lang = "ts">
	import springPress from '$lib/animationActions';
	import { Icon } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	export let title = '';
	export let link = '';
	export let icon = '';
    export let background = ''; 
</script>

<a 
    use:springPress
	transition:slide={{duration: 200, delay:200}}
    href="/api/{link}" class="square h-full p-2 rounded-lg w-full relative" style = "background-color: none}">
	<h1 
		transition:slide={{duration: 200, delay:200}}
 class="h-full w-full mx-1 leading-9">
		{title}
	</h1>
	<Icon src={icon} color="white" size="90px" class={'absolute bottom-0 right-0'} />
</a>

<style>
	.square {
		width: 100%;
		aspect-ratio: 1/1;
		backdrop-filter: blur(0px) saturate(150%) brightness(30%)
	}
	h1 {
		font-size: 30px;
		font-weight: 600;
	}
</style>
