const express = require('express');
const db = require('../models');
const profileRouter = express.Router();
const axios = require('axios');
const { response } = require('express');

profileRouter.get('/profile', (req, res) => {
    res.render('index')
})

// Adding city and state to city database
profileRouter.post('/', (req, res) => {
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

// Getting data from the city database
profileRouter.get('/', (req, res) => {
    db.city.findAll({
        where: { userId: req.user.id }
    }).then(city => {
        const cities = city.map(item => {
            return item.dataValues;
        }) 
        res.render('profile', { cities })
    })
})

// Deleting data from the city database
profileRouter.delete('/', (req, res) => {
    const { id } = req.body;
    db.city.findOne({
        where: { id: id }
    }).then((foundCity) => {
        foundCity.destroy().then(() => {
            res.redirect('/profile')
        })
    })
})

module.exports = profileRouter;