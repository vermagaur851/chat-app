import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'

const app = express()
dotenv.config()

app.use(cors({
    origin: process.env.ORIGIN,
    credentials:true
}))

export default app