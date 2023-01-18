<script lang = 'ts'>
	import { horizontalSlide } from '$lib/animationActions';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { blur, fly, slide } from 'svelte/transition';
</script>

<div
	transition:horizontalSlide={{ axis: 'x', duration: 400, delay: 400 }}
	class="container h-screen w-screen"
>
	<slot class="w-screen h-80 m-2" />
</div>
