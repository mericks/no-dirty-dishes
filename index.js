require('dotenv').config();
require('./lib/dbConnection');
const express = require('express');
const morgan = require('morgan')('dev');
const cookieSession = require('cookie-session');
const passport = require('passport');
const cors = require('cors')();

require('./lib/services/passport');
const errorHandler = require('./lib/services/error-handler')();
const auth = require('./lib/routes/authRoutes');
const user = require('./lib/routes/userRoutes');

const app = express();
app.use(express.json());

app.use(
    cookieSession({
        // maxAage has to be passedin in milliseconds = 30 days
        // 30 days * 24 hrs * 60 min * 60 sec * 1000 milliseconds
        maxAge: 30 * 24 * 60 * 60 * 1000,
        // key used to encrypt cookie
        // array allows for multiple keys to be randomly selected for increased protection
        keys: [process.env.COOKIE_SESSION_KEY]
    })
);
app.use(passport.initialize());
app.use(passport.session());

app.use(morgan);
app.use(cors);

// Routes
app.use('/api/auth', auth);
app.use('/api/user', user);

// Use static client build when in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
