const express = require('express');
const { check, validationResult} = require ('express-validator');

const router = express.Router();

//const mongoose = require('mongoose');
//const Registration = mongoose.model('Registration');

const Registration = require('../models/Registration');

/*
router.get('/', function(req,res) {
    res.send ('It works!');
});
*/

router.get('/registrations', function(req,res) {
    res.render('index', {title: 'Listing registrations' });
});


router.post('/', 
    [
    check ('name')
        .isLength ({min:1})
        .withMessage ('Please enter a name'),
    check ('email')
        .isLength ({min:1})
        .withMessage ('Please enter an email'),
    ],

    function(req,res) { 
        
        console.log(req.body);
        //res.render('form', {title: 'Registration form',});
        
    const errors = validationResult(req);
        if (errors.isEmpty()) {
            console.log('No Error');

            const registration = new Registration(req.body);
            registration.save()
                .then(() => { res.send('Thank you for your registration!'); })
                .catch((err) => {
                    console.log(err);
                    res.send('Sorry! Something went wrong.');
                });
           
        } else {
            console.log('Error');
            res.render('form', {
                title: 'Registration form',
                errors: errors.array(),
                data: req.body,
            });
        }
    }   
);

module.exports = router; 