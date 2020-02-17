const express = require('express');
const mongoose = require('mongoose');

const app = express();


app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect('mongodb://localhost/myapp');

app.listen(3000);