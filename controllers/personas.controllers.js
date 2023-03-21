import {Personas} from '../models/Personas.models.js'

const controller = {

    create: async(req, res)=> {
      try{
        const { estado, apellido, nombre, usuario, mail, departamento, area,cargo, interno, pass_tel} = req.body
        await Personas.create({estado, apellido, nombre, usuario, mail, departamento, area,cargo, interno, pass_tel})
        res.status(201).json({
          success: true,
          response: 'creado'
        })
      }catch(error){
        console.log(error)
      }
    },

    read: async(req,res)=> {
        try{
          let personas = await Personas.find()
          res.status(200).json({
            success: true,
            response: personas
          })
        } catch (error){
          console.log(error)

        }
    },
   one: async(req,res)=> {
    try{
      const { personas_id } = req.params
     let one = await Personas.findById(personas_id)
     if (one) {
        res.status(200).json({
            success: true,
            response: one
          })
     } else {
        res.status(404).json({
            success: false,
            response: 'persona no encontrada'
          })
     }
      
    }catch(error){
      console.log(error)
    }
   },
   update: async (req,res)=> {
    try{
      const {id} = req.params
      let persona = await Personas.findOneAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      )
      res.status(200).json({
        success: true,
        response: "updated",
        updated_persona: persona
      })
    }catch(error){
      console.log(error)
    }
   },
   destroy: async (req,res)=>{
    try{
const { id } = req.params
await Personas.findByIdAndDelete(id)
res.status(200).json({
  success: true,
  response: 'Persona eliminada'
})
    }catch(error){
      console.log(error)
    }
   }
}

export default controller