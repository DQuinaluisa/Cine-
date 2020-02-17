const mongoose = require('mongoose');

const Schema = mongoose.Schema({
    titulo : {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        enum : ['comedia','terror', 'drama'],
        required: true
    },
    resumen: {
        type: String,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    foto: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Pelicula', PeliculaSchema);