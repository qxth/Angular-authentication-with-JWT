const express = require('express')
const passport = require('passport')
const jwt = require('jsonwebtoken')
require('../utils/auth/jwt')

module.exports = app => {
    
    app.get('/profile', passport.authenticate('jwt', { session: false }),  (req, res) =>  {
      res.status(200).json({
        succes: true, msg: 'You authorized!'
      });
    });

}