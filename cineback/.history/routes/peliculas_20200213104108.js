const express = require('express');
const router = express.Router();
const multer = require('multer');


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads/');
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now())
    }
});

//const fileFilter = (req, file, cb) => {
// if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
//  cb(null, true);
// } else {
//  cb(null, false);
//  }
//};

const upload = multer({ 
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: fileFilter
});

const Pelicula = require('../models/pelicula');

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

router.post('/', upload.single('foto'), async (req, res) => {
    const pelicula = new Pelicula({
        titulo: req.body.titulo,
        categoria: req.body.categoria,
        resumen: req.body.resumen,
        precio: req.body.precio,
        foto: req.file.path
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
        const pelicula = await Pelicula.findById(req.params.id);
        pelicula.set(req.body);
        var resultado = await pelicula.save();
        res.json(resultado);
    } catch (err) {
        res.json({message: err});
    }
});

/*router.put('/:id', async (req, res) => {
    try {
         await Pelicula.updateOne({_id: req.body.id}, req.body, (err, resp) => {
            if(err){
                return res.send(err)
            }  
            return  res.json(resp)
        });
    
    } catch (err) {
        res.json({message:err});
    }
});*/


router.delete('/:id', async (req, res) => {
    try {
        const eliminarPelicula = await Pelicula.deleteOne({_id: req.params.id});
        res.json(eliminarPelicula);
    } catch (err) {
        res.json({message: err});
    }
});


module.exports = router;