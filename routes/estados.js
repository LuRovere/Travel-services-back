import controller from '../controllers/estados.controllers.js';
const {read, one} = controller
import express from 'express';
var router = express.Router();


router.get('/',read);
router.get('/:estados_id',one);

export default router;
