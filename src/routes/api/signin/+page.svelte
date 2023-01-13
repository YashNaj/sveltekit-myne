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
	<h1 class="text-3xl font-bold text-center my-2">Sign in</h1>
	<form method="POST" use:enhance>
		<label for="email" class="rounded">Email</label><br />
		<input id="email" name="email" class="rounded p-2"  /><br />
		<label for="password">Password</label><br />
		<input type="password" id="password" name="password" class="rounded p-2" /><br />
		<button class="flex justify-center align-center bg-white rounded" type = 'submit' >Sign In</button>
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
