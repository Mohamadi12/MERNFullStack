require('dotenv').config()
const express=require('express')
// Prour extraitre les donnees dans les requette http
const bodyParser=require('body-parser')
const connect= require('./config/connectDB')
const cors=require('cors')
const routers = require('./routes/posts')
const Port=5000 || process.env.port
const app=express()


app.use(express.json())
// La limite "30mb" est le format des images (HTTP au format JSON) et analyse encode les Urls
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors())
app.use('/posts',routers)
connect()


app.listen(Port,(err)=>{
    err?console.log(err):console.log(`Yes successfull ${Port}`)
})