const mongoose = require('mongoose');

const CompraSchema = mongoose.Schema({
    numeroBoletos : {
        type: String,
        required: true
    },
    email
    
});

module.exports = mongoose.model('Compra', CompraSchema);