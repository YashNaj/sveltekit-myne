import { dev } from '$app/environment';
import lucia from 'lucia-auth';
import adapter from '@lucia-auth/adapter-mongoose';
import mongoose from 'mongoose';

export const auth = lucia({
	adapter: adapter(mongoose),
	env: dev ? 'DEV' : 'PROD',
	transformUseData: (userData) => {
		return {
			userId: userData.id,
			provider_id: provider_id,
		};
	}
});

export type Auth = typeof auth;
