const bodyParser = require('body-parser')
const express = require('express');
const path = require('path')
const morgan = require('morgan');
const bearerToken = require('express-bearer-token')
const passport = require('passport')
const cookies = require('cookie-parser')
const cors = require('cors')

module.exports = app => {
    const host = process.env.HOST || '0.0.0.0';
    const port = process.env.PORT || 3000;
    app.set('port', port, host )

    app.use(morgan('dev'));
    app.use(cors())
    app.use(bearerToken());
    app.use(cookies())
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(passport.initialize());
    app.use(passport.session());
}