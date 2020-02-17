const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula')


router.get('/', async (req, res) => {
    
});

router.post('/', async (req, res) => {
    const pelicula = new Pelicula({
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        resumen: req.body.resumen,
        precio: req.body.precio,
        foto: req.body.foto
    });

    try {
        const savedPelicula = await pelicula.save();
        res.json(savedPelicula);
    } catch (err) {
        res.json({message: err});
    }
})


module.exports = router;