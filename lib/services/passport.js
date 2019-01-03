const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const User = require('../models/User');

// Serialize user _id (MongoDB _id, not ids pulled by OAuth) to be added to cookie
passport.serializeUser((user, done) => {
    console.log('serializeUserId', user.id);
    // null is where err would be passed in
    done(null, user.id);
});

// Deserialize user _.id passed back in cookie to identify user and
// Add user model instance to the req obj as 'req.user'
passport.deserializeUser((id, done) => {
    User.findById(id).then(user => {
        done(null, user);
    });
});

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: '/api/auth/google/callback',
            proxy: true
        },
        async (accessToken, refreshToken, profile, done) => {
            const existingUser = await User.findOne({ googleId: profile.id });

            if (existingUser) {
                return done(null, existingUser);
            }

            const user = await new User({
                googleId: profile.id,
                firstName: profile.name.givenName,
                lastName: profile.name.familyName,
                email: profile.emails[0].value,
                photoUrl: profile.photos[0].value
            }).save();
            // .then(user => console.log(user));
            done(null, user);
        }
    )
);
