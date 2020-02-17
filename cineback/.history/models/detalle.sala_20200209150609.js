const mongoose = require('mongoose');

const CSchema = mongoose.Schema({
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona"
    }
});

module.exports = mongoose.model('Compra', CompraSchema);