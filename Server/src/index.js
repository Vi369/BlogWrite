import { databaseConnection } from "./dbConnection/db.connection.js";
import dotenv from 'dotenv'
import { app } from "./app.js";
import {v2 as cloudinary} from 'cloudinary';


// envirnment configuration
dotenv.config({
    path: './.env'
})

// cloudinary configuration      
cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECERET 
});

const PORT = process.env.PORT || 8000

databaseConnection().then( ()=>{
    app.on('error', (error)=>{
        console.log("During Connecting MongoDb Error:",error)
        throw error}
    )

    app.listen(PORT, ()=>{
        console.log(`Server in running on http//localhost:${PORT}`)
    })
}).catch((error)=>{
    console.log('Mongo Db connection Failed:',error)
})
