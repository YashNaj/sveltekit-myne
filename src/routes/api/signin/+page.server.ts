import { fail, redirect } from '@sveltejs/kit';
import { auth } from '$lib/server/lucia';
import type { PageServerLoad, Actions } from './$types';
import db from '$db/mongo';

// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, '/profile');
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		const email = form.get('email');
		const password = form.get('password');
		// check for empty values
		if (!email || !password || typeof email !== 'string' || typeof password !== 'string')
			return fail(400);
		try {
			const user = await auth.authenticateUser('email', email, password);
			const session = await auth.createSession(user.userId);
			locals.setSession(session);
		} catch (error) {
			// invalid credentials
			return fail(400);
		}
	}
};