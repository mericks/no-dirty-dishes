const passport = require('passport');
const router = require('express').Router();

router

    .get(
        '/google',
        // 'google' string tells passport to use the GoogleStrategy wired up in passport.js for authentication.
        // (It has an internal identifier as a google strategy.)
        passport.authenticate('google', {
            // Scopes granted as part of the OAuth process
            scope: ['profile', 'email']
        })
    )

    .get('/google/callback', passport.authenticate('google'), (req, res) => {
        res.redirect('/dashboard');
    });

module.exports = router;
