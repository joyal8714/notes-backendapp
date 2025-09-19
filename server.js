require('dotenv').config();
const express=require('express')
const mongoose=require('mongoose')

const noteroutes=require('./routes/notes')
const errorHandler=require('./middleware/errorHandler')
const app=express()

const port=process.env.port || 5000

app.use(express.json())


app.use('api/notes',noteroutes)
app.use(errorHandler)

async function start(){
    try{
        await mongoose.connect(process.env.MONGO_URI,{

        })
        console.log('mongo is connected')
        app.listen(port,()=>{
            console.log(`server is runnig on port http://localhost:${port}`)
        })
    }catch(err){
        console.log(err)
    }
    }
start()
   