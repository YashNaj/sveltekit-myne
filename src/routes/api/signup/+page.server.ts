// routes/signup/+page.server.ts
import { fail, redirect } from "@sveltejs/kit";
import { auth } from "$lucia";


import type { PageServerLoad, Actions } from "./$types";
import db from '$db/mongo'
// If the user exists, redirect authenticated users to the profile page.
export const load: PageServerLoad = async ({ locals }) => {
	const session = await locals.validate();
	if (session) throw redirect(302, "/profile");
	return {};
};

export const actions: Actions = {
	default: async ({ request, locals }) => {
		const form = await request.formData();
		console.log(form)
		const email = form.get("email");
		const password = form.get("password");

		// check for empty values
		if (!email || !password || typeof email !== "string" || typeof password !== "string") {
			return fail(400);
		}

		try {
			const user = await auth.createUser("email", email, {
				password,
			});
			console.log('User Created')
			const session = await auth.createSession(user.userId);
			locals.setSession(session);
		} catch (err) {
			console.log(err);
			return fail(400);
		}
	}
};
