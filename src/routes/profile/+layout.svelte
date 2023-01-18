<script lang='ts'>
	import MobileNav from "$lib/components/MobileNav.svelte";
	import { getUser } from "@lucia-auth/sveltekit/client";
    export let user = getUser();
</script>
<slot class = "w-screen h-80 m-2"/>


