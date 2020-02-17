const express = require('express');
const router = express.Router();
const Pelicula = require


router.get('/', (req, res) =>{
    res.send('aqui estamos papa');
});


module.exports = router;