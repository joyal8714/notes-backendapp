require('dotenv').config();
const express=require('express')
const mongoose=require('mongoose')

const noteroutes=require('./routes/notes')
const errorHandler=require('./middleware/errorHandler')
const app=express()

