<script lang  = 'ts'>
	import springPress from '$lib/animationActions';
	import logo from '$lib/images/white_myne_logo.png';
	import { Icon, Menu } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
</script>

<nav transition:slide class="flex w-screen h-20 content-center justify-between">
	<div class="container">
		<img alt="Myne Logo" class="h-full p-1" src={logo} />
	</div>
	<div class="container flex w-full h-full justify-end content-end relative">
		<button
			use:springPress
			class="flex  justify-center  mx-2 h-full
                    content-center absolute bottom-0"
		>
			<Icon
				src={Menu}
				solid
				size="34"
				color="white"
				class="text-bold conent-end"
				style="position: absolute; bottom: 0; right: 0 "
			/>
		</button>
	</div>
</nav>

<style>
	img {
		max-width: 100%;
	}
	div {
		flex: 1;
	}
</style>
