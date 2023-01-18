<script lang="ts">
	import { signOut, getUser } from '@lucia-auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';
	import UserHeader from '$lib/components/UserHeader.svelte';
	import MobileNav from '$lib/components/MobileNav.svelte';
	import Dashboard from '$lib/components/Dashboard.svelte';
	import DashboardFunctions from '$lib/components/DashboardFunctions.svelte';
	import { fade, slide } from 'svelte/transition';
	export const user = getUser();
	console.log(user)
</script>

<div in:slide={{duration: 200, delay: 200}}
	out:fade={{duration: 200, delay:200}}
class = 'container w-full h-full flex-col justify-center align-center'>
    <div class = 'w-full h-full flex-col justify-center align-center'>
        <UserHeader user = {user} />
        <Dashboard user = { user }/>
		<DashboardFunctions/> 
    </div>
</div>
