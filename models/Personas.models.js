import mongoose from "mongoose";

const personasSchema = new mongoose.Schema({
    estado:{type: String, required: true},
    apellido:{type: String},
    nombre:{type: String},
    usuario:{type: String},
    mail:{type: String},
    departamento:{type: String},
    area:{type: String},
    cargo:{type: String},
    interno:{type: Number},
    pass_tel:{type: String},
    
}, {timestamps:true})

export const Personas = mongoose.model('personas',personasSchema)