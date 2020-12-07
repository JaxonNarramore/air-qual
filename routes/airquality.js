const express = require('express');
const db = require('../models');
const airRouter = express.Router();
const axios = require('axios');
const { response } = require('express');

airRouter.get('/airquality', (req, res) => {
    res.render('index')
})

// Call to weatherbit API to get data
airRouter.get('/location', (req, res) => {
    const citystate = req.query.location;
    const state = req.query.state;
    axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${citystate},${state}&key=${process.env.AIR_API_KEY}`)
    .then((response) => {
        const air = response.data;
        res.render('airquality', { query: air })
    }).catch((error) => {
            console.log(error);
         });
});

    
module.exports = airRouter;