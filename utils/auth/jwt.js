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

// passport.use(
//     new Strategy({
    //     secretOrKey: `${process.env.TOKEN}`,
    //     jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    //     passReqToCallback: true
    // },
//     async (jwt_payload, done) => {
//         try {
//             const user = await User.findOne({'username': jwt_payload.email})
//             console.log(jwt_payload.sub)
//             if (!user){
//                 return console.log('Unautorizado')
//             }
//             else{
//                 return console.log('autorizado')
//             }
//         }
//         catch(e){
//             return console.log(e)
//         }
//     }

//     )
// )
