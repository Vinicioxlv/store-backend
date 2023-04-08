const express = require('express')
const app = express()
const cors = require('cors')
const productsRouter = require('./apis')
require('dotenv').config()
require('./db/mongodb')

app.use(cors())

app.use(express.json())
const PUERTO = process.env.PORT || 5003

app.use(productsRouter)

app.get('/', (req,res)=>{
 res.send('Servidor vivo')
})

app.listen(PUERTO, ()=>{
    console.log(`Servidor conectado en puerto ${PUERTO}`)
})