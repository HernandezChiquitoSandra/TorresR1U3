const Cargo = require("../models/Cargo");

exports.obtenerCargos = async(req,res) =>{
    try {
        const cargos = await Cargo.find();
        res.json(cargos);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error!!! :(');
    }
}

