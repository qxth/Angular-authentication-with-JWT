const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy;
const User = require('../models/User');


passport.serializeUser((user, done) => {

    done(null, user.id);

})

passport.deserializeUser(async (id, done) => {

    const user = await User.findById(id);
    done(null, user);

})

passport.use('local-signup', new LocalStrategy({

    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {

    const coincidencia = await User.findOne({ username: email });
    console.log(coincidencia)
    if (coincidencia) {
        return done(null, false, console.log('El usuario que esta ingresando ya existe'))
    } else {
        const user = new User();
        user.username = email;
        user.password = user.encryptPassword(password);
        console.log(user)
        await user.save();
        done(null, user);
    }

}));

passport.use('local-signin', new LocalStrategy({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback: true

}, async (req, email, password, done) => {

    const user = await User.findOne({ username: email });

    if (!user) {

        return done(null, false, console.log('El email registrado ya existe!'))

    }

    if (!user.comparePassword(password)) {

        return done(null, false, console.log('La contraseña o el email son incorrectos!'));
    }


        done(null, user);


}))