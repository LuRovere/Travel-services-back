import 'dotenv/config.js'
import '../../config/database.js'
import {Estados} from '../Estados.models.js'

let estados = [
    {estado: "ACTIVO"},
    {estado: "BAJA"}
]

Estados.insertMany(estados)