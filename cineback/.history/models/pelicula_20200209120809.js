const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    titulo : {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        enum : ['comedia','terror', 'drama']
    },
    resumen: {
        type: String,
        
    },
    precio: {
        type: String
    },
    foto: {
        type: String

    }

})