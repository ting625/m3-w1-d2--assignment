const express = require('express');
const router = express.Router();
const { check, validationResult} = require ('express-validator');

/*
router.get('/', function(req,res) {
    res.send ('It works!');
});
*/

router.get('/', function(req,res) {
    res.render('form', {title: 'Registration form' });
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
            res.send('Thank you for your registration!');
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