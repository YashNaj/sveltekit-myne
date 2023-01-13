import type { PageServerLoad } from "./$types";
import { writable } from 'svelte/store'
import { redirect } from '@sveltejs/kit';

export const load: PageServerLoad = async ({ locals }) => {
	 const session = await locals.validate();
};
