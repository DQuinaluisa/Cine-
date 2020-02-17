const mongoose = require('mongoose');

const detalle_SalaSchema = mongoose.Schema({
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona"
    }
});

module.exports = mongoose.model('Compra', CompraSchema);