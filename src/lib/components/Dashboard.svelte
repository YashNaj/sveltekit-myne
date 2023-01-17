<script lang = 'ts'>
	import { invalidateAll } from '$app/navigation';
	import { signOut } from '@lucia-auth/sveltekit/client';
	import { spring } from 'svelte/motion';
	import { slide } from 'svelte/transition';        
	import Listbox from './Listbox.svelte';
	export let user;
	let isOpen = false;
	let drawerHeight = spring(75);

	if (!isOpen === true ){	
		drawerHeight.set(75)
	}
    console.log(isOpen)
	console.log(drawerHeight)
</script>
<div class = 'container h-auto w-auto m-2'>
	<div transition:slide
		 class = 'dashboard flex p-2 justify-center align-center relative rounded-lg'
		 style= 'height: {$drawerHeight}vh'>	
	     <button class = 'h-auto width-auto' on:click={() => isOpen = !isOpen}/>
			<div class = 'drawer-main-dropdown'>
				<Listbox/> 
			</div>
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
		background: rgb(255, 255, 255);
		background: -moz-radial-gradient(
			circle,
			rgba(255, 255, 255, 1) 0%,
			rgba(224, 224, 224, 1) 100%
		);
		background: -webkit-radial-gradient(
			circle,
			rgba(255, 255, 255, 1) 0%,
			rgba(224, 224, 224, 1) 100%
		);
		background: radial-gradient(circle, rgba(255, 255, 255, 1) 0%, rgba(224, 224, 224, 1) 100%);
        width: 100%;	}
</style>
