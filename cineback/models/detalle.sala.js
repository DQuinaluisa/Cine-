const mongoose = require('mongoose');

const detalleSalaSchema = mongoose.Schema({
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelicula"
    },
    sala: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Sala"
    },
});

module.exports = mongoose.model('DetalleSala', detalleSalaSchema);