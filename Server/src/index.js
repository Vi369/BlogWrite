import { databaseConnection } from "./dbConnection/db.connection.js";
import dotenv from 'dotenv'
import { app } from "./app.js";

// envirnment configuration
dotenv.config({
    path: './.env'
})

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
