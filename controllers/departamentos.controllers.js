import {Departamentos} from '../models/Departamentos.models.js'

const controller = {
    create: async(req,res)=> {
      try{
        const {departamento}= req.body
        await Departamentos.create({departamento})
        res.status(201).json({
          success: true,
          response: 'departamento creado'
        })
      }catch(error){
        console.log(error)
      }
    },

    read: async(req,res)=> {
        try{
          let departamentos = await Departamentos.find()
          res.status(200).json({
            success: true,
            response: departamentos
          })
        } catch (error){
          console.log(error)

        }
    },
   one: async(req,res)=> {
    try{
      const { departamentos_id } = req.params
     let one = await Departamentos.findById(departamentos_id)
     if (one){
      res.status(200).json({
        success: true,
        response: one
      })
     } else{
      res.status(404).json({
        success: false,
        response: 'departamento no encontrado'
      })
     }
      
    }catch(error){
      console.log(error)
    }
   },
   update: async(req,res)=>{
    try{
      const {id} = req.params
      let departamento = await Departamentos.findByIdAndUpdate(
        { _id: id },
        req.body,
        { new: true }
      )
      res.status(200).json({
        success: true,
        response: "updated",
        updated_departamento: departamento
      })
    }catch(error){
      console.log(error)
    }
   },
   destroy: async (req,res)=>{
    try{
      const { id } = req.params
      await Departamentos.findByIdAndDelete(id)
      res.status(200).json({
        succsess:true,
        response: "Departamento eliminado"
      })
    } catch(error){
      console.log(error)
    }
   }
}

export default controller