const express = require('express')
const path = require('path')
const passport = require('passport')

require('../utils/auth/basic')

module.exports = router => {

    router.get('/api/register', (req,res)=>{
        res.json({
            register: "hola mundo"
        });
    })

    router.post('/api/register', passport.authenticate('local-signup', {
        session: false,
        successRedirect: '/api/login',
        failureRedirect: '/api/register',
        passReqToCallback: true
    }));


};





