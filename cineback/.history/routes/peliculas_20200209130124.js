const express = require('express');
const router = express.Router();
const Pelicula = require('../models/pelicula')


router.get('/', async (req, res) => {
    try {
        const peliculas = await Pelicula.find();
        res.json(peliculas);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const pelicula = await Pelicula.findById(req.params.id);
        res.json(pelicula);
    } catch (err){
        res.json({ message: err});
    }
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
});

router.put('/:id', async (req, res) => {
    try {
        const actualizarPelicula = await Pelicula.findById(req.params.id);
        pelicula.set(req.body);
        var  = await pelicula.save();
        res.send(resultado);
    } catch (error) {
        res.status(500).send(error);
    }
});


router.delete('/:id', async (req, res) => {
    try {
        const eliminarPelicula = await Pelicula.remove({_id: req.params.id});
        res.json(eliminarPelicula);
    } catch (err) {
        res,json({message: err})
    }
});


module.exports = router;