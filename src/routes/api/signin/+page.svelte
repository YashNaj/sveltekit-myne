<script lang="ts">
	import { enhance } from '$app/forms';
	import { fade, slide } from 'svelte/transition';
	import  springPress  from  '$lib/animationActions';
	export let form: { message?: string };
	let duration = 200;
	console.log(form?.message);
</script>

<div
	in:slide={{ duration, delay: duration }}
	out:slide={{ duration }}
	class="flex-col m-2 p-2 h-full justify-evenly"
>
	<h1 class="text-3xl font-bold text-center my-2">Sign in</h1>
	<form
		method="POST"
		use:enhance={({ data, cancel }) => {
			form = {};
			const email = data.get('email')?.toString() || '';
			const password = data.get('password')?.toString() || '';
			if (!email || !password) {
				form.message = 'Invalid input';
				cancel();
			}
		}}
	>
		<label for="email" class="rounded">Email</label><br />
		<input id="email" name="email" class="rounded p-2" /><br />
		<label for="password">Password</label><br />
		<input type="password" id="password" name="password" class="rounded p-2" /><br />
		<div class="flex w-full h-10 my-2">
			{#if form?.message}
				<div
					class="flex rounded w-full error"
					out:fade={{ duration: 100, delay: duration }}
					in:slide={{ duration: 100}}
				>
					<span class="error-tag h-full w-5 bg-black rounded " />
					<p class="error w-full h-10 flex bg-white rounded  p-2">
						{form.message || ' '}
					</p>
				</div>
			{/if}
		</div>
		<button use:springPress class="flex justify-center align-center bg-white rounded" type="submit">Sign In</button>
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
		color: white;
		font-weight: 600;
		padding: 1rem;
		width: 100%;
		font-size: 1.4rem;
		margin: 2rem 0rem;
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
		background: rgb(108, 91, 154);
		background: -moz-radial-gradient(
			circle,
			rgba(108, 91, 154, 1) 0%,
			rgba(104, 104, 169, 1) 33%,
			rgba(101, 114, 180, 1) 94%,
			rgba(99, 119, 186, 1) 100%
		);
		background: -webkit-radial-gradient(
			circle,
			rgba(108, 91, 154, 1) 0%,
			rgba(104, 104, 169, 1) 33%,
			rgba(101, 114, 180, 1) 94%,
			rgba(99, 119, 186, 1) 100%
		);
		background: radial-gradient(
			circle,
			rgba(108, 91, 154, 1) 0%,
			rgba(104, 104, 169, 1) 33%,
			rgba(101, 114, 180, 1) 94%,
			rgba(99, 119, 186, 1) 100%
		);
	}
	.error {
		background-color: rgba(204, 133, 133, 0.795);
	}
	.error-tag {
		background-color: red;
	}
</style>
