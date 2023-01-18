<script lang  = 'ts'>
	import { invalidateAll } from '$app/navigation';
	import springPress, { horizontalSlide } from '$lib/animationActions';
	import { signOut } from '@lucia-auth/sveltekit/client';
	import { spring } from 'svelte/motion';
	import { quintOut } from 'svelte/easing';
	import { fade, fly, slide, blur } from 'svelte/transition';
	import Listbox from './Listbox.svelte';
	import { Icon, Archive, X } from 'svelte-hero-icons';
	export let user;
	let isOpen = false;
	let heightScale = 20;
	let drawerHeight = spring(heightScale, {
		stiffness: 0.15,
		damping: 0.5
	});

	function setOpen() {
		isOpen = !isOpen;
		if (isOpen) {
			drawerHeight.set(75);
		} else {
			drawerHeight.set(20);
		}
		console.log(isOpen);
		console.log($drawerHeight);
	}
</script>

<div 	transition:horizontalSlide={{ axis: 'x', duration: 200, delay: 200 }}
class="container flex-col h-auto w-auto m-2 ">
	<div
		transition:blur={{ delay: 200}}
		class="dashboard flex-col p-2 justify-center  align-center  relative rounded-lg"
		style="height: {$drawerHeight}vh"
	>
		{#if isOpen}
			<div transition:slide class=" flex-col h-full w-full">
				<div
					transition:slide={{ delay: 200}}
					class="relative px-4 fixed  h-20 w-full flex align-center justify center z-1"
				>
					<Listbox />
				</div>
				<div
					transition:blur={{ delay: 200, duration: 200}}
					class="card-container place-items-center grid gap-2 grid-cols-2 grid-rows-auto w-full h-full"
				>
					<div transition:blur={{ delay: 200}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg  " />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg" />
					<div transition:blur={{ delay: 200}} class=" square rounded-lg  " />
				</div>
				<button
					in:slide={{ delay: 200 }}
					out:slide
					use:springPress
					on:click={() => setOpen()}
					on:keypress={() => setOpen()}
					class="rounded-lg bg-none p-2 m-1 bg-white text-black text-xl z-50 absolute right-0 top-0 drawer-button"
				>
					<Icon src={X} solid size="54" color="white" class="text-bold  " />
				</button>
			</div>
		{:else}
			<div class="drawer-message container flex-col justify-center align-center  w-full relative">
				<h1
					in:slide={{ delay: 200 }}
					out:slide
					class=" w-full drawer-header justify-center align-center
		 text-center flex font-semibold text-[60px]  leading-11"
				>
					Card Drawer
				</h1>
				<button
					in:slide={{ delay: 200 }}
					out:slide
					use:springPress
					on:click={() => setOpen()}
					on:keypress={() => setOpen()}
					class=" icons rounded-lg p-2 m-1 bg-white text-black absolute right-0 text-xl z-50 drawer-button"
				>
					<Icon src={Archive} solid size="54" color="white" class="text-bold  " />
				</button>
			</div>
		{/if}
	</div>
</div>
<button
	class="absolute bottom-0 right-20 bg-black p-2 h-auto rounded-lg"
	on:click={async () => {
		await signOut();
		invalidateAll();
	}}>Sign out</button
>

<style>
	.dashboard {
		box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
			rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
		/* background: -moz-radial-gradient(
			circle,
			rgba(255, 255, 255, 0.795) 0%,
			rgba(224, 224, 224, 0.801) 100%
		);
		background: -webkit-radial-gradient(
			circle,
			rgba(255, 255, 255, 0.808) 0%,
			rgba(224, 224, 224, 1) 100%
		);
		background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(224, 224, 224, 1) 100%); */
		width: 100%;
		-webkit-backdrop-filter: blur(40px) brightness(150%) saturate(10%);
		backdrop-filter: blur(40px) brightness(150%) saturate(200%);
		overflow: hidden;
	}
	.square {
		width: 90%;
		aspect-ratio: 1/1;
		background-color: white;
	}
	.drawer-header {
		color: white;
	}

	.drawer-button {
		text-decoration: none;
		background: none;
	}
	.icons {
		color: rgba(255, 255, 255, 0.795) 0%;
	}
	.card-container {
		overflow: scroll !important;
	}
</style>
