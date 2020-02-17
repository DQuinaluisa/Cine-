const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect('mongodb://localhost/cine2', () => 
    console.log());

app.listen(3000);