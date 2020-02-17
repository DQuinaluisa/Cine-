const express = require('express');
const router = express.Router();
const Persona = require('../models/persona')


router.get('/', async (req, res) => {
    try {
        const personas = await Persona.find();
        res.json(personas);
    } catch (err) {
        res.json({message: err});
    }
});

router.get('/:id', async (req, res) => {
    try {
        const persona = await Sala.findById(req.params.id);
        res.json(persona);
    } catch (err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const sala = new Sala({
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        horario: req.body.horario
    });
    try {
        const savedSala = await sala.save();
        res.json(savedSala);
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
        const eliminarSala = await Sala.remove({_id: req.params.id});
        res.json(eliminarSala);
    } catch (err) {
        res,json({message: err})
    }
});


module.exports = router;