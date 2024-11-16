import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import router from './routes/testRoutes.js'


/* import axios from 'axios' */
dotenv.config()

/* mongo db connection */
connectDB();

/* rest object */
const app=express()

/* axios.get() */

app.use ("/api/v1/test",router)

const Port=process.env.PORT || 8080

app.listen(Port,()=>{
    console.log(`server is running on ${Port}`)
})