import mongoose from "mongoose";

const usuariosSchema = new mongoose.Schema({
    mail:{ type: String, require: true},
    password:{ type: String, require: true},
    is_online:{ type: Boolean, require: true},
    is_admin:{ type: Boolean, require: true},
    is_soporte:{ type: Boolean, require: true},
    is_recepción:{ type: Boolean, require: true},
}, {timestamps:true}
)

export const Usuarios = mongoose.model('usuarios', usuariosSchema)