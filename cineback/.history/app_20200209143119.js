const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');


app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const peliculaRoute = require('./routes/peliculas')
const salaRoute = require('./routes/salas');
const personaRoute = require('./routes/persona');

app.use('/peliculas', peliculaRoute);
app.use('/salas', salaRoute);
app.use('/')

app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log('conectado bd')
);


app.listen(3000);