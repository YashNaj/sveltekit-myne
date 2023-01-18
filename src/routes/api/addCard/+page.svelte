<script>
	import { horizontalSlide } from '$lib/animationActions';
	import { fade, fly, slide } from 'svelte/transition';
	let duration = 200;
</script>

<div
in:horizontalSlide={{delay:100, duration: 100}}
out:horizontalSlide={{delay: 100}}
	class="container h-auto w-full flex-col add-cards"
>
	<div class = 'container h-auto w-full p-2 bg-white'>

	</div>
</div>