import { handleServerSession } from "@lucia-auth/sveltekit";
import { auth } from '$lucia'
export const load = handleServerSession();