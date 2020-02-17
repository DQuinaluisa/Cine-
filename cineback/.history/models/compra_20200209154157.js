const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numeroboletos : {
        type: String,
        required: true
    },
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona"
    },
    detalle: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "DetalleSala"
    }
});

module.exports = mongoose.model('Compra', CompraSchema);