const express = require('express');

const router = express.Router();


router.get('/peliculas', (req, res) =>{
    res.send('aqui estamos papa');
});


module.exports