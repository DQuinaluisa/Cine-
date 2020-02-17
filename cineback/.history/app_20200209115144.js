const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');




app.get('/', (req, res) => {
    res.send('aqui esta');
});

mongoose.connect(
    process.env.DB_CONNECTION,
    () => console.log('conectada bd')
    
);


app.listen(3000);