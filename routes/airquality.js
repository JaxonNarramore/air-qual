// import axios from "axios";
const express = require('express');
const db = require('../models');
const airRouter = require('express').Router();
const axios = require('axios');

const options = {
    method: 'GET',
    url: 'https://climacell-microweather-v1.p.rapidapi.com/weather/nowcast',
    params: {lat: '30.267153', lon: '-97.743057', fields: 'pm25'},
    headers: {
      'x-rapidapi-key': 'd2bd3f5da2msh5952c49d114b508p117b12jsn2f0b0977b92e',
      'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
      console.log(response.data);
  }).catch(function (error) {
      console.error(error);
  });


//   airRouter.get('/airquality', (req, res) => {
//       axios.get('')
//   })



module.exports = airRouter;