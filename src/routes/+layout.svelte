<!-- src/routes/+layout.svelte -->
<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';
	import { handleSession, getUser } from '@lucia-auth/sveltekit/client';
	import Nav from '$lib/components/Nav.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	handleSession(page);
	const user = getUser();
</script>

<svelte:head>
	<link rel="stylesheet" href="https://use.typekit.net/kaa7gct.css" />
</svelte:head>

{#if $user != null}
<div class="w-screen h-screen">
<MobileNav/>
<slot/>
</div>
{:else}
<div class="w-screen h-screen">
	<Nav />
	<slot />
	<Footer />
</div>
{/if}
<style>
	:global(html) {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		width: 100vw;
		background: rgb(0, 45, 114);
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
		height: 100%;
		width: 100%;
	}
	div {
		display: flex;
		flex-direction: column;
	}
	:global(input) {
		color: black;
	}
</style>
