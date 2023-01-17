import mongoose from 'mongoose';
import { MONGO_URI, VITE_MONGO_URI } from '$env/static/private';

export async function start_mongo(){
    try {
        console.log('Starting Mongo...')
        await  mongoose.connect(VITE_MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
          });
                    
    }
    catch ( err ) {
        console.log(err)
    }
    finally{
        console.log('Connected to MyneDB')
    }

}
                                                                   