import users from './users.js'
import departamentos from './departamentos.js'
import estados from './estados.js'
import personas from './personas.js'
import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("TravelServices server ready");
});

router.use('/users',users)
router.use('/estados',estados)
router.use('/departamentos',departamentos)
router.use('/personas',personas)
export default router;
