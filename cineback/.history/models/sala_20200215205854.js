const mongoose = require('mongoose');

const SalaSchema = mongoose.Schema({
    nombre : {
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    horario: {
        type: String,
        required: true
    },
    pelicula: {
        typ
    }

});

module.exports = mongoose.model('Sala', SalaSchema);