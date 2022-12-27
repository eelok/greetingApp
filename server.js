'use strict';

const express = require('express');

const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Greeting Everybody!')
});

app.get('/hello', (req, res) => {
    res.send('Greeting my friends!')
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
});