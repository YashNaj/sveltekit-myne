<!-- routes/signup/+page.svelte -->
<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';


	let duration = 200;
</script>

<div
	in:fade={{ duration, delay: duration }}
	out:slide={{ duration }}
	class="flex-col m-2 p-2 h-full justify-evenly"
>
	<h1 class="font-bold text-3xl text-center my-2">Create an account</h1>
	<form method="POST" use:enhance>
		<label for="email" class="rounded">Email</label><br />
		<input id="email" name="email" class="rounded p-2" /><br />
		<label for="password">Password</label><br />
		<input type="password" class="rounded p-2 " id="password" name="password" /><br />
		<button class="flex bg-white my-2  rounded justify-center align-center ">Sign Up!</button>
	</form>
</div>

<style>
	label {
		font-weight: bold;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
	input {
		width: 100%;
		height: 2rem;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
	button {
		color: blue;
		font-weight: 600;
		padding: 1rem;
		width: 100%;
		font-size: 1.4rem;
		margin: 2rem 0rem;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
</style>
