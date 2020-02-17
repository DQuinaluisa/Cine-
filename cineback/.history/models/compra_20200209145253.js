const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numero_boletos : {
        type: String,
        required: true
    },
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelicula"
    },
    persona
});

module.exports = mongoose.model('Compra', CompraSchema);