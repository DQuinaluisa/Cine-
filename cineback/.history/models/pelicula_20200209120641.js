const mongoose = require('mongoose');

const PeliculaSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },

})