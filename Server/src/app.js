import express from 'express'

const app = express();







// import healthCheck Routes
import healthCheckRouter from './routes/healthCheck.routes.js'



// Routes Declaration
app.use('/api/v1/healthCheck', healthCheckRouter)





export { app }
