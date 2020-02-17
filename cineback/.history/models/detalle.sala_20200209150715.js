const mongoose = require('mongoose');

const detalleSalaSchema = mongoose.Schema({
    pelicula: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "P"
    }
});

module.exports = mongoose.model('DetalleSala', detalleSalaSchema);