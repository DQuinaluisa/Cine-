const express = require('express');
const router = express.Router();
const Compra = require('../models/compras')


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
        const persona = await Persona.findById(req.params.id);
        res.json(persona);
    } catch (err){
        res.json({ message: err});
    }
});

router.post('/', async (req, res) => {
    const sala = new Sala({
        nombre: req.body.nombre,
        comtraseña: req.body.contraseña,
        correo: req.body.correo
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
        const eliminarPersona = await Persona.remove({_id: req.params.id});
        res.json(eliminarPersona);
    } catch (err) {
        res,json({message: err})
    }
});


module.exports = router;