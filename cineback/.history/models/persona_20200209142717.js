const mongoose = require('mongoose');

const PersonaSchema = mongoose.Schema({
    nombre : {
        type: String,
        required: true
    },
    contraseña: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

});

module.exports = mongoose.model('Pelicula', PersonaSchema);