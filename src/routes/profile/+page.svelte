<script lang="ts">
	import { signOut, getUser } from '@lucia-auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';
	import UserHeader from '$lib/components/UserHeader.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	export const user = getUser();
	console.log(user)
</script>

<div class = 'container w-full h-full flex-col justify-center align-center'>
    <div class = 'w-full h-full flex-col justify-center align-center'>
        <UserHeader user = {user} />
        <Dashboard user = { user }/>
    </div>
</div>
