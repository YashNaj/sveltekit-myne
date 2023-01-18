<script>
	import { slide } from 'svelte/transition'
	export let user;
</script>

<div transition:slide={{duration: 200, delay: 200}} class="container ">
	<div 
	transition:slide={{duration: 200, delay: 200}}
	class="user-header flex rounded-lg h-20 m-2 w-100 justify-start p-2 align-center relative">
		<div class="circle" />
		<h1 class="flex-col justify-end align-end h-100 text-2xl mx-2">

			<span class="font-bold"> Welcome! </span>&nbsp;
            {$user?.userId} 

		</h1>
        <a href = '/profile/settings'
        class = 'flex text-xs absolute right-0 bottom-0 my-1 mx-1 italic'>
            Take a peak at your profile defaults
        </a>
	</div>
</div>

<style>
	.user-header {
		background: rgb(33, 78, 224);
		background: -moz-radial-gradient(circle, rgba(33, 78, 224, 1) 0%, rgba(3, 62, 140, 1) 100%);
		background: -webkit-radial-gradient(circle, rgba(33, 78, 224, 1) 0%, rgba(3, 62, 140, 1) 100%);
		background: radial-gradient(circle, rgba(33, 78, 224, 1) 0%, rgba(3, 62, 140, 1) 100%);
		box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
	}
	.circle {
		background-color: rgba(255, 255, 255, 0.699);
		width: 3.5rem;
		height: 3.5rem;
		border-radius: 100%;
	}
</style>
