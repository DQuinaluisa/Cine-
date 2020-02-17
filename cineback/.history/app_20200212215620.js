const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();



app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


const peliculaRoute = require('./routes/peliculas')
const salaRoute = require('./routes/salas');
const personaRoute = require('./routes/persona');
const detalleRoute = require('./routes/detalle.sala');
const compraRoute = require('./routes/compras')

app.use('/peliculas', peliculaRoute);
app.use('/salas', salaRoute);
app.use('/personas', personaRoute);
app.use('/detalles', detalleRoute);
app.use('/compras', compraRoute)

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log('conectado bd')
);

app.listen(3001);