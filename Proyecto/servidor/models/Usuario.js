const mongoose = require('mongoose');

const usuarioSchema = mongoose.Schema({
    nombreUsuario: {
        type: String,
        required: true
    },
    apePaterno: {
        type: String,
        required: true
    },
    apeMaterno: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    edad: {
        type: Number,
        required: true
    },
    genero: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    ciudad: {
        type: String,
        required: true
    },
    cargo: {
        type: String,
        required: true
    }
}, {
    collection: 'Usuario' // especificar el nombre de la colección
});

module.exports = mongoose.model('Usuario', usuarioSchema);
