const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;

const app = express();

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log('conectado bd')
);

app.use(cors());
app.use('/uploads', express.static)
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



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

app.listen(port, function(){
    console.log('Hola el servidor esta: ', port);
});