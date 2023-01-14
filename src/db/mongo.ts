import mongoose from 'mongoose';
import { VITE_MONGO_URI } from '$env/static/private';
import { MongoClient } from 'mongodb';
const client = new MongoClient(VITE_MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
try{
    console.log('Starting Mongo...')
    await mongoose.connect(VITE_MONGO_URI)

}
catch ( err ) {
    console.log(err)
}
const User = mongoose.model(
    "user",
    new mongoose.Schema(
        {
            _id: {
                type: String
            },
            provider_id: {
                type: String,
                unique: true,
                required: true
            },
            hashed_password: String
        },
        { _id: false }
    )
);
const Session = mongoose.model(
    "session",
    new mongoose.Schema(
        {
            _id: {
                type: String
            },
            user_id: {
                type: String,
                required: true
            },
            expires: {
                type: Number,
                required: true
            },
            idle_expires: {
                type: Number,
                required: true
            }
        },
        { _id: false }
    )
);

export async function start_mongo(){
        
        try {
            await client.connect()
            client.db('myne')
            console.log('Connected to Myne')
        }
        catch ( err ) {
            console.log(err)
        }
}
const db = client.db('myne')
export default db

                                                                   