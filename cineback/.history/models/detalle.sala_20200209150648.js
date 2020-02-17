const mongoose = require('mongoose');

const detalleSalaSchema = mongoose.Schema({
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona"
    }
});

module.exports = mongoose.model('Compra', detalleSalaSchema);