const router = require('express').Router();
const async = require('async');
const passport = require('passport');

const userModel = require('../models/user');

router.route('/sign_up')
    .get((req, res, next) => {
        res.render('accounts/signup');
    })

    .post((req, res, next) => {
        userModel.findOne({email: req.body.Email}, function(err, existingUser) {
            if(existingUser)
            {
                return res.redirect('/signup');
            }
            else
            {
                var newUser = new userModel();
                newUser.Name = req.body.Name;
                newUser.Email = req.body.Email;
                newUser.Password = req.body.Password;
                newUser.save(function(err) {
                    if(err)
                        return next(err);
                    req.logIn(newUser,function(err) {
                        if(err)
                            return next(err);
                        res.redirect('/');
                    });
                });
            }
        });
    });

module.exports = router;