const express=require('express')
const router=express.Router()
const note=requrie('../models/note')
const mongoose=require('mongoose')

router.get('/',async(req,res,next)=>{
    try{
        const notes=await note.find().sort({createdAt:-1})
        res.json(notes)
    }
    catch(err){
        next(err)
    }
})