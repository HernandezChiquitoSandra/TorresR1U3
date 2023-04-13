const express = require('express');
const router = express.Router();
const cargoController = require('../controllers/cargoController');

//api rutas
router.get('/', cargoController.obtenerCargos);


module.exports = router;