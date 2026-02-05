require('dotenv').config()
require('./config/db')
const express = require('express')
const cors = require('cors')
const routes = require('./routes')

const cookpediaServer = express()

cookpediaServer.use(cors())
cookpediaServer.use(express.json())
cookpediaServer.use(routes)
cookpediaServer.use('/uploads',express.static('./uploads'))

const PORT = 3000

cookpediaServer.listen(PORT,()=>{
    console.log("cookpedia server started");
    
})

cookpediaServer.get('/',(req,res)=>{
    res.status(200).send("<h1>cookpedia server started</h1>")
})