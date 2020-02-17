const express = require('express');
const router = express.Router();
const DetalleSala = require('../models/detalle.sala')


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
        const savedCompra = await detalle.save();
        res.json(savedCompra);
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
        res,json({message: err})
    }
});


module.exports = router;