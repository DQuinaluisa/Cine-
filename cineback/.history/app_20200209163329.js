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
//const personaRoute = require('./routes/persona');
//const compraRoute = require('./routes/compras')
//const detalleRoute = require('./routes/detalle.sala')

app.use('/peliculas', peliculaRoute);
//app.use('/salas', salaRoute);
//app.use('/personas', personaRoute);
//app.use('/compras', compraRoute)
//app.use('/detalles', detalleRoute)

app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log('conectado bd')
);


app.listen(3000);