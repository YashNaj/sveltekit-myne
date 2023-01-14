import {start_mongo} from '$db/mongo';
import { auth } from '$lucia';
import { handleHooks } from "@lucia-auth/sveltekit";
export const handle = handleHooks(auth);
try{
    start_mongo();
    console.log('Succesfully started')
}
catch (err){
    console.log(err)
}