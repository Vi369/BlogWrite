import mongoose from 'mongoose'
import { APP_NAME } from '../constant.js'


export const databaseConnection = async()=>{
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGO_URI}/${APP_NAME}`)
        // console.log(connectionInstance)
        // console.log(`MongoDb connection Host:${connectionInstance.connection.host}`);
    } catch (error) {
        console.log("Database Connection Failed: ",error);
        process.exit(1)
    }
}