import mongoose from 'mongoose'
require("dotenv").config();


//mongoose connection


mongoose.connect("mongodb+srv://admin:Loco123@goticamovie.s0fus.mongodb.net/GoticaMovie?retryWrites=true&w=majority")
.then(() => console.log('Connected to MongoDB Atlas'))
.catch((error) => console.error(error));