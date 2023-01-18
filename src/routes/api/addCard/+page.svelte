<script>
	import { horizontalSlide } from '$lib/animationActions';
	import { fade, fly, slide } from 'svelte/transition';
	let duration = 200;
</script>

<div
transition:slide={{delay:duration, duration}}
	class="container h-full w-full flex-col add-cards"
>
	<div class = 'content h-auto w-full p-2 bg-white'>
		
	</div>
</div>