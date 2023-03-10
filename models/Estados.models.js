import mongoose from "mongoose";

const estadosSchema = new mongoose.Schema({
    estado:{type: String, required: true} 
}, {timestamps:true})

export const Estados = mongoose.model('estados', estadosSchema)