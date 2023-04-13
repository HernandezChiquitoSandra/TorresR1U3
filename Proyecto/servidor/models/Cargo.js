const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    tipoCargo: {
        type: String,
        required: true
    }
}, {
    collection: 'Cargo' // especificar el nombre de la colección
});

module.exports = mongoose.model('Cargo', usuarioSchema);
