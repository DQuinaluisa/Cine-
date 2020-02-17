const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numeroBoletos : {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    sala: {
        type: String,
        required: true
    },
    pelicula: {}
    
});

module.exports = mongoose.model('Compra', CompraSchema);