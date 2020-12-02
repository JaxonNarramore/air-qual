const express = require('express');
const db = require('../models');
const airRouter = express.Router();
const axios = require('axios');

airRouter.get('/', (req, res) => {
    axios.get(`https://api.weatherbit.io/v2.0/current/airquality?lat=30.267153&lon=-97.743057&key=${process.env.AIR_API_KEY}`)
    .then((response) => {
        const air = response.data;
        console.log(air);
        res.render('index', { air })
    }).catch((error) => {
            console.log(error);
         });
    });

module.exports = airRouter;
