const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
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
        type: ,
        required: true
    },
    foto: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Pelicula', PeliculaSchema);