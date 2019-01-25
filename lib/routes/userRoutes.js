const router = require('express').Router();

router

    // In dev, verifies that authentication/cookies are working correctly
    // In prod, provides user info to front end
    .get('/current', (req, res) => {
        res.send(req.user);
    })

    .get('/logout', (req, res) => {
        // logout() is a function that passport automatically attaches to req obj--kills cookie session
        req.logout();
        res.send(req.user);
        res.redirect('/');
    });

module.exports = router;
