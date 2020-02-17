const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula')


router.get('/', (req, res) => {
    res.send('aqui estamos papa');
});

router.post('/', (req, res) => {
    const pelicula = new Pelicula({
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        resumen: req.body.resumen,
        precio: req.body.precio,
        foto: req.body.foto
    });

    try {
        const savedPelicula = await this.post.save();
        res.json(savedPelicula);
    }catch (err) {
        res.json({messa: err})
    }
})


module.exports = router;