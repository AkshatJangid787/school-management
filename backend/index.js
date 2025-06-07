import dotenv from 'dotenv'
dotenv.config()

import mongoose from 'mongoose'
mongoose.connect(process.env.DB)

.then(()=>console.log("Database connected"))
.catch(()=>console.log("Failed to connect with database"))

import express from "express"
const app = express()

app.listen(8080, ()=>console.log("App is running on 8080"))