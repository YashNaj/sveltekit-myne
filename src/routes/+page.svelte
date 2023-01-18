<script lang = 'ts'>
	import { fade, slide } from 'svelte/transition';
	import springPress from '$lib/animationActions';
</script>

<div
	in:fade={{ duration: 200, delay: 0 }}
	out:slide={{ duration: 200 }}
	class=" myne_sign-container container flex-col justify-center h-full"
>
	<div class="flex-col justify-center content-center m-2 w-100">
		<h1 class="text-center text-3xl font-bold  ">Welcome to Myne</h1>
		<div class="flex-col m-1 p-1 .w-screen .h-screen">
			<a
				use:springPress
				href="/api/signup"
				class="tropical-blue flex p-2 my-3 content-center justify-center w-full rounded font-bold"
			>
				Sign Up
			</a>

			<a
				use:springPress
				href="/api/signin"
				class="fruity-purple flex p-2 my-3 content-center justify-center w-full rounded font-bold"
			>
				Sign In
			</a>
		</div>
	</div>
</div>

<style>
	:global(:root) {
		--myne-blue: #002d72;
		--drawer-gradient: linear-gradient(
			90deg,
			rgba(132, 175, 240, 1) 0%,
			rgba(134, 177, 245, 1) 46%,
			rgba(175, 194, 223, 1) 100%
		);
		--add-card-gradient: linear-gradient(90deg, rgba(132,240,139,1) 0%, rgba(140,245,134,1) 0%, rgba(175,223,181,1) 100%);
		--import-card-gradient: linear-gradient(90deg, rgba(235,175,175,1) 0%, rgba(204,39,39,1) 0%, rgba(245,134,134,1) 100%);
		
	}

	a {
		background-color: white;
		color: var(--myne-blue);
		box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
		transition: transform 0.2s ease-in-out;
	}
	.fruity-purple {
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
		color: white;
	}
	:global(html) {
		width: 100vw;
		height: auto;
		background:white;
	}
	:global(a.tropical-blue, .tropical-blue) {
		background: rgb(74, 11, 245);
		background: -moz-radial-gradient(
			circle,
			rgba(74, 11, 245, 1) 0%,
			rgba(67, 67, 223, 1) 31%,
			rgba(82, 105, 227, 1) 94%,
			rgba(51, 93, 235, 1) 100%
		);
		background: -webkit-radial-gradient(
			circle,
			rgba(74, 11, 245, 1) 0%,
			rgba(67, 67, 223, 1) 31%,
			rgba(82, 105, 227, 1) 94%,
			rgba(51, 93, 235, 1) 100%
		);
		background: radial-gradient(
			circle,
			rgba(74, 11, 245, 1) 0%,
			rgba(67, 67, 223, 1) 31%,
			rgba(82, 105, 227, 1) 94%,
			rgba(51, 93, 235, 1) 100%
		);
		color: white;
	}
</style>
