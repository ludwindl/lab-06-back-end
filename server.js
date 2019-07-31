'use strict';

require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || 3000;

app.use(cors());
//create a route with a method of get and a path of location
app.get('/location', (request, response) =>{
  try{
    let locationData = getData(request.query.data);
    response.send(locationData);
  } catch(error) {
    console.log('There was an error!');
  }
});

//function to be invoked by the get() 

function getData (locationName){
  let jsonData = require('./data/geo.json');
  let location = new Location(locationName, jsonData);
  return location;
}

// function constructor
function Location (query, jsonData) {
  this.sear_query = query;
  this.formatted_query = jsonData.results[0].formatted_address,
  this.latitude = jsonData.results[0].geometry.location.lat,
  this.longitude = jsonData.results[0].geometry.location.lng
}

app.listen(PORT,() => console.log(`Listening on port ${PORT}`));


