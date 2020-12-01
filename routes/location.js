const express = require('express');
const db = require('../models');
const locationRouter = require('express').Router();
const axios = require('axios');

locationRouter.get('/location', (req, res) => {
    axios.get('https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyBmdUcBwyFSBNz9zQ_lPWdKhbSSVwskLuA')
    .then((response) => {
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
    });
});

module.exports = locationRouter;