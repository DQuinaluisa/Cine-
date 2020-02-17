const express = require('express');
const router = express.Router();
const Persona = require('../models/persona');


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
        const persona = await Persona.findById(req.params.id);
        res.json(persona);
    } catch (err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const persona = new Persona({
        nombre: req.body.nombre,
        comtraseña: req.body.contraseña,
        correo: req.body.correo
    });
    try {
        const savedPersona = await persona.save();
        res.json(savedPersona);
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
        const eliminarPersona = await Persona.remove({_id: req.params.id});
        res.json(eliminarPersona);
    } catch (err) {
        res.json({message: err})
    }
});


module.exports = router;