const express = require('express');
const router = express.Router();
const DetalleSala = require('../models/detalle.sala');


router.get('/', async (req, res) => {
    try {
        const detalle = await DetalleSala.find();
        res.json(detalle);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const detalle = await DetalleSala.findById(req.params.id);
        res.json(detalle);
    } catch (err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const detalle = new DetalleSala({
        pelicula: req.body.pelicula,
        sala: req.body.sala,
    });
    try {
        const savedDetalle = await detalle.save();
        res.json(savedDetalle);
    } catch (err) {
        res.json({message: err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const detalle = await DetalleSala.findById(req.params.id);
        detalle.set(req.body);
        var resultado = await detalle.save();
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
        const eliminarDetalle = await DetalleSala.deleteOne({_id: req.params.id});
        res.json(eliminarDetalle);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;