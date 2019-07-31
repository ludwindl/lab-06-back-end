'use strict';

require('dotenv').config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/hello', (request, response) => {
  response.status(200).send('Hello, Test');
});

app.get('/location', (request, response) => {
  response.status(200).send('Hello');
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));