const express = require('express');
const db = require('../models');
const airRouter = express.Router();
const axios = require('axios');

airRouter.get('/', (req, res) => {
    res.render('index')
})

airRouter.get('/location', (req, res) => {
    const citystate = req.query.location;
    console.log(citystate);
    axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${citystate}&key=${process.env.AIR_API_KEY}`)
    .then((response) => {
        const air = response.data;
        console.log(air);
        res.render('airquality', { query: air })
    }).catch((error) => {
            console.log(error);
         });
    });

    
module.exports = airRouter;
    
    
    
    
    
    
    
    

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // airRouter.post('/', (req, res) => {
    //     axios.request(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.MAP_API_KEY}`)
    //     .then((response) => {
    //         const location = response.data;
    //         console.log(location);
    //         // res.render('location', { location })
    //     }).catch((error) => {
    //         console.log(error);
    //     });
    // });
