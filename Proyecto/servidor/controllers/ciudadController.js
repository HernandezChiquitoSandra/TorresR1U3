const Ciudad = require("../models/Ciudad");

exports.obtenerCiudades= async(req,res) =>{
    try {
        const ciudades = await Ciudad.find();
        res.json(ciudades);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!!! :(');
    }
}

