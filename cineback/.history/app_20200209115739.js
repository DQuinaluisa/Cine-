const express = require('express');
const app = express();
const mongoose = require('mongoose');


const peliculaRoute = require


app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log('conectado bd')
);


app.listen(3000);