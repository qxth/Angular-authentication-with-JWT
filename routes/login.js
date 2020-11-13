const express = require('express')
const passport = require('passport')
const path = require('path')
const secret = process.env.SECRET;
const jwt = require('jsonwebtoken')
const User = require('../utils/models/User');

require('dotenv').config({ path: '.env' })

module.exports = router => {
    router.get('/', (req, res, next) => {
        
        res.send('Piola')
    })


    router.get('/api/login', (req,res)=>{
        res.json({
            login: "login"
        })
    })
    router.post('/api/login', (req, res, next) => {

        passport.authenticate('local-signin',  (err, user) => {
            try {
                req.login(user, { session: false }, async (err) => {
                    if (err) { next(error) }
                    if (user) {
                        // const { _id: id, username: email } = user;

                        const payload = {
                            sub: user._id,
                            username: user.username,
                            iat: Date.now()
                            
                        }
                        const token = jwt.sign(JSON.stringify(payload), process.env.SECRET, {
                        });
                        const tok = jwt.verify(token, process.env.SECRET);
                        
                        User.findOne({_id: tok.sub} , function (err, user) {
                            if (err) {
                                return console.log(err, false);
                            }
                            if (user) {
                                return console.log(null, user);
                            } else {
                                return console.log(null, false);
                            }
                        });
                        // res.cookie('token', token, { expire: new Date() + 9999 })
                        console.log(token)
                        res.status(200).json({
                            token: token
                        })
                       
                    }

                    

                })

            }
            catch (e) {
                console.log(e)
            }
        })(req, res, next)
    })

}