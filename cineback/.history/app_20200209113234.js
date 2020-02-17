const express = require('express');
const mongoose = require('mo')

const app = express();


app.get('/', (req, res) => {
    res.send('aqui esta');
})

app.listen(3000);