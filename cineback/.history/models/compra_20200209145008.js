const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numero_boletos : {
        type: String,
        required: true
    },
 

});

module.exports = mongoose.model('Pelicula', CompraSchema);