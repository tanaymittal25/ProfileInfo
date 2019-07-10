const passport = require('passport');
const localStrategy = require('passport-local').Strategy;

const userModel = require('../models/user');

passport.serializeUser(function(userModel, done) {
    done(null, userModel.id);
});

passport.deserializeUser(function(id, done) {
    userModel.findById(id, function(err, userModel) {
        done(err, userModel);
    });
});

passport.use('local-login', new localStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true
}, function(req, email, password, done) {
   userModel.findOne({ email: email}, function(err, user) {
        if(err)
            return done(err);
        
        if(!user)
            return done(null, false, req.flash('loginMessage', 'No User Found'));

        if(!user.comparePassword(password))
            return done(null, false, req.flash('loginMessage', 'Incorrect Password'));
        
        return done(null, user);
   }); 
}));

exports.isAuthenticated = function(req, res, next) {
    if(req.isAuthenticated())
        return next()
    res.redirect('/login');
}