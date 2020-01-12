const mongoose = require('mongoose');
const { USERNAME, EMAIL, PASSWORD, DATE } = require('../constants/user');
const { USER, DICTIONARY } = require('../constants/models');

const userSchema = mongoose.Schema({
    [USERNAME]: {
        type: String,
        require: true
        // min 6
        // max 255
    },
    [PASSWORD]: {
        type: String,
        require: true
        // min 6
        // max 1024
    },
    [EMAIL]: {
        type: String,
        require: true
    },
    [DATE]: {
        type: Date,
        default: Date.now
    },
    [DICTIONARY]: [{ type: mongoose.Types.ObjectId, ref: DICTIONARY }]
});

module.exports = mongoose.model(USER, userSchema);