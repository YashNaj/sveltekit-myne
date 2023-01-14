import { dev } from '$app/environment';
import lucia, { type UserData } from 'lucia-auth';
import adapter from '@lucia-auth/adapter-mongoose';
import mongoose from 'mongoose';

export const auth = lucia({
	adapter: adapter(mongoose),
	env: dev ? 'DEV' : 'PROD',
	transformUseData: (userData: UserData) => {
		return {
			userId: userData.id,
			
		};
	}
});

export type Auth = typeof auth;
