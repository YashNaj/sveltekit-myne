<script>
	import { signOut, getUser } from '@lucia-auth/sveltekit/client';
	import { onMount } from 'svelte';
	import { fade, slide } from 'svelte/transition';
	let duration = 200;
	const user = getUser();
	console.log(user);

	let isAuthenticated = false;
	onMount(async()=>{
		if (user){
			isAuthenticated = true; 
		}
	})
</script>

<div
	in:fade={{ duration, delay: duration }}
	out:slide={{ duration }}
	class=" myne_sign-container container flex-col justify-center h-full"
>
	<div class="flex-col justify-center content-center m-2 w-100">
		<h1 class="text-center text-3xl font-bold  ">Welcome to Myne</h1>
		<div class="flex-col m-1 p-1 .w-screen .h-screen">
			<a
				
				href="/api/signup"
				class="flex p-2 my-3 content-center justify-center w-full rounded font-bold"
			>
				Sign Up</a
			>
			<a
				href="/api/signin"
				class="flex p-2 my-3 content-center justify-center w-full rounded font-bold"
			>
				Sign In</a
			>
		</div>
	</div>
</div>

<style>
	.myne_sign-container {
	}
	a {
		background-color: white;
		color: #1621b3;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
</style>
