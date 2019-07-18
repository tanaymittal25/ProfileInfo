const router = require('express').Router();
const async = require('async');

const userObj = require('../models/user');
const dataObj = require('../models/object');

router.route('/add-data')
    .get((req, res, next) => {
        res.render('landing/add-data');
    })
    .post((req, res, next) => {
        async.waterfall([
            function(callback) {
                dataObj.find({ Name: req.body.Name_Ptr })
                    .exec(function(err, data) {
                        console.log(data.length);
                        if (data.length != 0)
                            res.render('landing/err-message', { message: 'Data Found' });
                        else {
                            var newObj = new dataObj();
                            newObj.Name = req.body.Name_Ptr;
                            newObj.Username = req.body.Username_Ptr;
                            newObj.Password = req.body.Password_Ptr;
                            newObj.save(function(err) {
                                callback(err, newObj);
                            });
                            res.redirect('/');
                        }
                    });
            }
        ]);
    });

router.route('/get-data')
    .get((req, res, next) => {
        dataObj.find({}, function(err, data) {
            res.render('landing/get-data', { data: data });
        });
    });

module.exports = router;