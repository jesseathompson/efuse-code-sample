import express from 'express'
import {json} from 'body-parser'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()
const PORT = process.env.PORT || 3000;

mongoose.connect("mongodb://mongo:27017", () => {
    console.log('Connected to mongo')
})
const app = express()
app.use(json())

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})