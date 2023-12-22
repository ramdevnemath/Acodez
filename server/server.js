import express from 'express'
import bodyParser from 'body-parser'
import dotenv from 'dotenv'
import connectDB from './config/mongoDB.js'

dotenv.config()
const app = express()
app.use(bodyParser.json())

connectDB()

app.use('/api', stockRoutes);

const port = process.env.PORT
app.listen(port, ()=> {
    console.log(`Server is running at port:${port}`)
})