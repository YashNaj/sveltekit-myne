<script lang = 'ts'>
	import {  Database , DocumentAdd, Search, UserAdd } from "svelte-hero-icons";
	import { slide } from "svelte/transition";
	import DashboardSquareButton from "./DashboardSquareButton.svelte";

 
</script>
<div 
transition:slide={{duration:100, delay: 100}}
class= "container h-[47vh] relative  p-2 w-full"> 
    <div 
    transition:slide={{duration:100, delay: 100}}

    class = 'h-full w-full rounded-lg grid grid-cols-2 grid-rows-auto gap-4 place-items-center'> 
        <!-- <a 
            href = '/api/import' 
            class = 'square h-full rounded-lg w-full relative'>
            <h1 class = 'h-full w-full mx-1'> 
                Import Your Cards 
            </h1>
            <Icon src = {Database} color = 'white' size = '90px' class = {'absolute bottom-0 right-0'}/>
        </a> -->
        <DashboardSquareButton background = 'var(--myne-blue)'   title = 'Import Your Cards' icon = {Database} link = 'import'/>
        <DashboardSquareButton background = 'red'   title = 'Add a Card' icon = {DocumentAdd} link = 'addCard'/>
        <DashboardSquareButton background = 'black' title = 'Search For Items' icon = {Search} link = 'search'/>
        <DashboardSquareButton background = 'green' title = 'Child ID' icon = {UserAdd} link = 'import'/>

    </div>    
 </div>
 <style lang = 'postcss'>
    .square{
        width: 100%; 
        aspect-ratio: 1/1; 
        backdrop-filter: blur(40px) ;
    }
    h1{
        font-size: 30px;
        font-weight: 600;

    }
 </style>
