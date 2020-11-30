const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const db = require('../models');

// Passport "serialize" your info and make it easier to login
passport.serializeUser((user, cb) => {
    cb(null, user.id)
});

// Passport 'deserealize' is to take the id and look up in database
passport.deserializeUser((id, cb) => {
    db.user.findByPk(id)
    .then(user => {
        if (user) {
            cb(null, user);
        }
    })
    .catch(err => {
        console.log(err);
    })
});

passport.use(new localStrategy({
    usernameField: 'email',
    passwordField: 'password'
}, (email, password, cb) => {
    db.user.findOne({
        where: { email }
    })
    .then(user => {
        if (!user || !user.validPassword(password)) {
            cb(null, false);
        } else {
            cb(null, user);
        }
    })
    .catch(cb);
}));

module.exports = passport;