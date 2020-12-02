const express = require('express');
const db = require('../models');
const locationRouter = require('express').Router();
const axios = require('axios');

locationRouter.post('/', (req, res) => {
    axios.get(`https://www.googleapis.com/geolocation/v1/geolocate?key=${process.env.MAP_API_KEY}`)
    .then((response) => {
        const location = response.data;
        console.log(location);
        res.render('location', { location })
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = locationRouter;