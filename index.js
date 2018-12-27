require('dotenv').config();
require('./lib/dbConnection');
const express = require('express');
const morgan = require('morgan')('dev');
const cors = require('cors')();

const app = express();
app.use(express.json());
app.use(morgan);
app.use(cors);

// Routes

// Use static client build when in production
if (process.env.NODE_ENV === 'production') {
    app.use(express.state('client/build'));
    const path = require('path');
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on Port ${PORT}`);
});
