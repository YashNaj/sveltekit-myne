<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { handleSession, getUser } from '@lucia-auth/sveltekit/client';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import { slide } from 'svelte/transition';
	const duration = 200;
	handleSession(page);
	const user = getUser();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
	<meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
</svelte:head>

{#if $user != null}
	<div in:slide={{ duration: 200, delay: 200 }} class="w-screen h-screen">
		<MobileNav />
		<slot />
	</div>
{:else}
	<div transition:slide={{ duration: 200, delay: 200 }} class="w-screen h-screen">
		<Nav />
		<slot />
		<Footer />
	</div>
{/if}

<style lang = 'postcss'>
	:global(:root){
		--myne-blue: #002d72;
	}
	:global(html) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background: #002d72 0% 55%;
		background: -moz-linear-gradient(180deg, rgba(0, 45, 114, 1) 29%, rgba(53, 112, 201, 1) 100%);
		background: -webkit-linear-gradient(
			180deg,
			rgba(0, 45, 114, 1) 29%,
			rgba(53, 112, 201, 1) 100%
		);
		background: linear-gradient(180deg, rgba(0, 45, 114, 1) 29%, rgba(53, 112, 201, 1) 100%);
		color: white;
		font-family: futura-pt;
		box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
			rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
			rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
			rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
			rgba(0, 0, 0, 0.09) 0px 32px 16px;
	}
	:global(body) {
		height: auto;
		width: 100%;
		padding: env(safe-area-inset-top) env(safe-area-inset-right) env(safe-area-inset-bottom) env(safe-area-inset-left);
	}
	:global(input) {
		color: black;
	}
	:global(.fruity-purple) {
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
	@supports (padding: max(0px)) {
		body,
		header,
		footer {
			padding-left: min(0vmin, env(safe-area-inset-left));
			padding-right: min(0vmin, env(safe-area-inset-right));
		}
	}
	@media only screen and (orientation: portrait) {
		body .shrink {
			width: 95%;
		}
	}
	@media only screen and (orientation: landscape) {
		body .shrink {
			width: 90%;
			/* Shrink a little more to avoid the notch. */
		}
	}

	.center {
		text-align: center;
		margin: 0 auto;
	}
</style>
