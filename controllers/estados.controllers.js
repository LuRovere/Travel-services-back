import {Estados} from '../models/Estados.models.js'

const controller = {
    read: async (req,res)=> {
        try{
           let estados = await Estados.find()
           res.status(200).json({
            succsess:true,
            response: estados
           })
        }catch(error){

        }
    },
    one: async(req,res)=> {
        try{
          const { estados_id } = req.params
         let one = await Estados.findById(estados_id)
         if (one) {
            res.status(200).json({
                success: true,
                response: one
              })
         } else {
            res.status(404).json({
                success: false,
                response: 'estado no encontrado'
              })
         }
          
        }catch(error){
          console.log(error)
        }
       }
}

export default controller