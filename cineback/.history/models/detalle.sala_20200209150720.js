const mongoose = require('mongoose');

const detalleSalaSchema = mongoose.Schema({
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Pelicula"
    },
});

module.exports = mongoose.model('DetalleSala', detalleSalaSchema);