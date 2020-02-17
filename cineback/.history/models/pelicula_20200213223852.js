const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    titulo : {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        enum : ['comedia','terror', 'drama', 'infantil'],
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
    }

});

module.exports = mongoose.model('Pelicula', PeliculaSchema);