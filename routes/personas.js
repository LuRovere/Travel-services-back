import controller from '../controllers/personas.controllers.js';
const {read, one, create, update, destroy} = controller
import express from 'express';
var router = express.Router();


router.get('/',read);
router.get('/:personas_id',one);
router.post('/',create);
router.put('/:id',update);
router.delete('/:id',destroy)
export default router;
