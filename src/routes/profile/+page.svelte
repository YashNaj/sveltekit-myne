<script lang="ts">
	import { signOut, getUser } from '@lucia-auth/sveltekit/client';
	import { invalidateAll } from '$app/navigation';

	const user = getUser();
	console.log;
</script>

<h1>Profile</h1>
<div>
	<p>User id: {$user?.userId}</p>
</div>
<button
	on:click={async () => {
		await signOut();
		invalidateAll();
	}}>Sign out</button
>
