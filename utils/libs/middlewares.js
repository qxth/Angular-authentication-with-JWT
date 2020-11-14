const bodyParser = require('body-parser')
const morgan = require('morgan');
const passport = require('passport')

module.exports = app => {
    const host = process.env.HOST || '0.0.0.0';
    const port = process.env.PORT || 3000;
    app.set('port', port, host )

    app.use(morgan('dev'));
    
    
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(passport.initialize());
    app.use(passport.session());
}