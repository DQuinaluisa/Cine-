const express = require('express');
const router = express.Router();
const Compra = require('../models/compra');


router.get('/', async (req, res) => {
    try {
        const compras = await Compra.find();
        res.json(compras);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const compra = await Compra.findById(req.params.id);
        res.json(compra);
    } catch (err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const compra = new Compra({
        numeroBoletos: req.body.numeroBoletos,
        email: req.body.email,
        sala: req.body.sala,
        pelicula: req.body.pelicula,
        horario: req.bosy.
    });
    try {
        const savedCompra = await compra.save();
        res.json(savedCompra);
    } catch (err) {
        res.json({message: err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const compras = await Compra.findById(req.params.id);
        compras.set(req.body);
        var resultado = await compras.save();
        res.json(resultado);
    } catch (err) {
        res.json({message: err});
    }
});

/*router.put('/:id', async (req, res) => {
    try {
        const actualizarSala = await Sala.update({_id: req.params.id});
        actualizarPelicula.set(req.body);
        const resultado = await actualizarPelicula.save();
        res.json(resultado);
    } catch (err) {
        res.json({message:err});
    }
});*/


router.delete('/:id', async (req, res) => {
    try {
        const eliminarCompra = await Compra.remove({_id: req.params.id});
        res.json(eliminarCompra);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;