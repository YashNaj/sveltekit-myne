import {start_mongo} from '$db/mongo';
import { auth } from "$lib/server/lucia";
import { handleHooks } from "@lucia-auth/sveltekit";
export const handle = handleHooks(auth);
try{
    start_mongo();
    console.log('Succesfully started')
}
catch (err){
    consol.log(err)
}