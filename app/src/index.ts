import express from 'express'
import {json} from 'body-parser'

const app = express()
app.use(json())

app.get( "/", ( req, res ) => {
    res.send( "Hello world!" );
} );
app.listen(3000, () => {
    console.log('server listening on port 3000')
})