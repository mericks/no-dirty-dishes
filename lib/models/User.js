const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    googleId: String,
    firstName: String,
    lastName: String,
    email: String,
    photoUrl: String
});

module.exports = mongoose.model('User', userSchema);
