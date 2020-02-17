const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numero_boletos : {
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
        type: string,
        required: true
    },
    foto: {
        type: String,
        required: true
    }

});

module.exports = mongoose.model('Pelicula', CompraSchema);