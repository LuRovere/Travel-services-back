import "dotenv/config.js";
import "../../config/database.js";
import { Usuarios } from "../Usuarios.models.js";

let usuarios = [
  {
    mail: "admin@travelservices.com",
    password: "12313",
    is_online: false,
    is_admin: true,
    is_soporte: false,
    is_recepción: false,
  },

  {
    mail: "soporte@travelservices.com",
    password: "soporte123",
    is_online: false,
    is_admin: false,
    is_soporte: true,
    is_recepción: false,
  },

  {
    mail: "recepcion@travelservices.com",
    password: "recepcion123",
    is_online: false,
    is_admin: false,
    is_soporte: false,
    is_recepción: true,
  },
];

Usuarios.insertMany(usuarios);
