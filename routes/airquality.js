const express = require('express');
const db = require('../models');
const airRouter = require('express').Router();
const axios = require('axios');

airRouter.get('/airquality', (req, res) => {
    axios.get('https://api.weatherbit.io/v2.0/current/airquality?lat=35.7721&lon=-78.63861&key=cfa6525b1d6648ec8ff6e4d71d72379a')
    .then((response) => {
        console.log(response);
        })
    });
    
    module.exports = airRouter;
    
    
    
    
































// const options = {
//     method: 'GET',
//     url: 'https://climacell-microweather-v1.p.rapidapi.com/weather/realtime',
//     params: {lat: '30.267153', lon: '-97.743057', fields: 'epa_health_concern'},
//     headers: {
//       'x-rapidapi-key': `${process.env.API_KEY}`,
//       'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
//       'Content-Type': 'application/json'
//     }
//   };
  

//   airRouter.get('/airquality', (req, res) => {
//       axios.request(options)
//       .then((response) => {
//           console.log(response.data);
//           //res.render('partials/index', { air: response.data })
//       }).catch(function (error) {
//           console.error(error);
//       });
//   });


// const options = {
    //     method: 'GET',
    //     url: 'https://climacell-microweather-v1.p.rapidapi.com/weather/realtime',
    //     params: {lat: '30.267153', lon: '-97.743057', fields: 'epa_health_concern'},
    //     headers: {
        //       'x-rapidapi-key': `${process.env.API_KEY}`,
        //       'x-rapidapi-host': 'climacell-microweather-v1.p.rapidapi.com',
        //       'Content-Type': 'application/json'
        //     }
        //   };
        
        //   axios.request(options).then((response) => {
            //       console.log(response.data);
            //       response.render('partials/index', { air: response.data })
            //   }).catch(function (error) {
                //       console.error(error);
                //   });