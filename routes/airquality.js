const express = require('express');
const db = require('../models');
const airRouter = express.Router();
const axios = require('axios');
const { response } = require('express');

airRouter.get('/airquality', (req, res) => {
    res.render('index')
})

airRouter.get('/airquality/location', (req, res) => {
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

airRouter.post('/profile', (req, res) => {
    const { city_name } = req.body;
    const state = req.body.state_code;
    db.city.create({
        name: city_name,
        state: state,
        userId: req.user.id
    }).then(() => {
        res.redirect('/profile')
    }).catch((error) => {
        console.log(error);
    })
})

airRouter.get('/profile', (req, res) => {
    db.city.findAll({
        where: { userId: req.user.id }
    }).then(city => {
        const cities = city.map(item => {
            return item.dataValues;
        }) 
        res.render('profile', { cities })
    })
})

airRouter.delete('/profile', (req, res) => {
    const { id } = req.body;
    console.log(id);
    db.city.findOne({
        where: { id: id }
    }).then((foundCity) => {
        foundCity.destroy().then(() => {
            res.redirect('/profile')
        })
    })
})

    
module.exports = airRouter;