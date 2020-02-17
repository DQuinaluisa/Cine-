const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numero_boletos : {
        type: String,
        required: true
    },
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona"
    }
});

module.exports = mongoose.model('Compra', CompraSchema);