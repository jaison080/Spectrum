const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
	gender: {type: String},
	sexualPreference: {type: String},
    profilePicture: { type: String, default: '' },
    bio: { type: String, default: '' },
    dob: { type: Date, default: Date.now },
    role: {type: String, default:"user"}
});

module.exports = mongoose.model('User', UserSchema);