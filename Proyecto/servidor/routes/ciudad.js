const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/ciudadController');

//api rutas
router.get('/', ciudadController.obtenerCiudades);


module.exports = router;