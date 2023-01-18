<script lang="ts">
	import springPress from '$lib/animationActions';
	import logo from '$lib/images/white_myne_logo.png';
	import { Icon, Menu } from 'svelte-hero-icons';
	import { slide } from 'svelte/transition';
	const duration = 200;
</script>

<nav
	transition:slide={{ delay: duration, duration }}
	class="flex w-screen h-20 content-center justify-between"
>
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
				class={'text-bold flex-col'}
				style="position: absolute; bottom:1.5rem;  right: 0;"
			/>
		</button>
	</div>
</nav>
<div class="spacer">&nbsp;</div>

<style lang="postcss">
	nav {
		background: var(--myne-blue);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
		position: fixed;
		top: 0;
		z-index: 99;
	}
	.spacer {
		width: 100%;
		height: 95px;
	}

	img {
		max-width: 100%;
	}
	div {
		flex: 1;
	}
</style>
