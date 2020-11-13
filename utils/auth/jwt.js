const passport = require('passport')
const { Strategy, ExtractJwt } = require('passport-jwt')
require('dotenv').config({ path: '.env' })
const secret = process.env.SECRET

const User = require('../models/User');
let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: secret
}
   
passport.use(new Strategy(opts,  (payload, done) => {
        User.findOne({_id: payload.sub} , (err, user) => {
            if (err) {
                return console.log(err, false);
            }
            if (user) {
               done(null, user);
            } else {
                return console.log(null, false);
            }
        });
    
    }));

