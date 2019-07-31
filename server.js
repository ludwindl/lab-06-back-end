'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors());
// app.get('/hello', (request, response) => {
//   response.status(200).send('Hello, Test');
// });

app.get('/location', (request, response) => {
  try{
    let locationData = require ('./data/geo.json');
    response.send(locationData);
  } catch(error) {
    console.log('There was an error!')
  }
  response.status(200).send('locationData');
});

app.use('*', (request, response) => response.send('Sorry, that route does not exist.'))

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));
