const express = require('express');
const db = require('../models');
const airRouter = express.Router();
const axios = require('axios');

airRouter.get('/airquality', (req, res) => {
    res.render('index')
})

airRouter.get('/airquality/location', (req, res) => {
    const citystate = req.query.location;
    const state = req.query.state;
    // console.log(citystate);
    axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${citystate},${state}&key=${process.env.AIR_API_KEY}`)
    .then((response) => {
        const air = response.data;
        // console.log(air);
        res.render('airquality', { query: air })
    }).catch((error) => {
            console.log(error);
         });
});

airRouter.post('/profile', (req, res) => {
    const { city_name } = req.body;
    const state = req.body.state_code;
    // console.log(city_name);
    // console.log(state);
    console.log(req.body.state_code);
    axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${city_name},${state}&key=${process.env.AIR_API_KEY}`)
    .then((response) => {
        // const air = response.data;
        console.log('unique', response);
        // console.log(req.user.id);
    db.city.create({
        name: city_name,
        state: state,
        userId: req.user.id
    }).then(() => {
        res.render('profile', { query: response.data })
        })
    }).catch((error) => {
        console.log(error);
    })
})

// airRouter.delete('/profile', (req, res) => {
//     const { city_name } = req.body;
//     db.cities.findOne({
//         where: { city_name }
//     }).then((foundCity) => {
//         foundCity.destory().then(() => {
//             res.redirect('/profile')
//         })
//     })
// })

    
module.exports = airRouter;
    
    
    
    
    
    
    
    

// airRouter.get('/airquality/location', (req, res) => {
//     const citystate = req.query.location;
//     console.log(citystate);
//     axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${citystate}&key=${process.env.AIR_API_KEY}`)
//     .then((response) => {
//         const air = response.data;
//         // console.log(air);
//         res.render('airquality', { query: air })
//     }).catch((error) => {
//             console.log(error);
//          });
// });

// airRouter.post('/profile', (req, res) => {
//     const { city_name } = req.body;
//     console.log(city_name);
//     axios.get(`https://api.weatherbit.io/v2.0/current/airquality?city=${city_name}&key=${process.env.AIR_API_KEY}`)
//     .then((response) => {
//         const air = response.data;
//         console.log('unique', air);
//     db.city.create({
//         name: city_name
//     }).then(() => {
//         res.render('airquality', { query: air })
//         })
//     }).catch((error) => {
//         console.log(error);
//     })
// })
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
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
