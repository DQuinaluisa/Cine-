const express = require('express');
const router = express.Router();
const Sala = require('../models/sala');


router.get('/', async (req, res) => {
    try {
        const salas = await Sala.find();
        res.json(salas);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const sala = await Sala.findById(req.params.id);
        res.json(sala);
    } catch (err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const sala = new Sala({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        horario: req.body.horario,
    });
    try {
        const savedSala = await sala.save();
        res.json(savedSala);
    } catch (err) {
        res.json({message: err});
    }
});

router.put('/:id', async (req, res) => {
    try {
        const salas = await Sala.findById(req.params.id);
        salas.set(req.body);
        var resultado = await salas.save();
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
        const eliminarSala = await Sala.deleteOne({_id: req.params.id});
        res.json(eliminarSala);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;