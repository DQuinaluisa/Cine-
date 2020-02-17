const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require()

app.use(bodyParser.json());


const peliculaRoute = require('./routes/peliculas')

app.use('/peliculas', peliculaRoute);

app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log('conectado bd')
);


app.listen(3000);