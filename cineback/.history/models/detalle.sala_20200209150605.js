const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    persona: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Persona"
    }
});

module.exports = mongoose.model('Compra', CompraSchema);