const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombreCiudad: {
        type: String,
        required: true
    }
}, {
    collection: 'Ciudad' // especificar el nombre de la colección
});

module.exports = mongoose.model('Ciudad', usuarioSchema);
