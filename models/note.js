const mongoose=require('mongoose')

const noteSchema=new mongoose.Schema({
    tittle:{type:String,required:true},
    content:{type:String,default:''},
    
})

module.exports=mongoose.model('note',noteSchema)
