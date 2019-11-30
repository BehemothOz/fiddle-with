const mongoose = require('mongoose');
const [ USERNAME, EMAIL, PASSWORD, DATE ] = require('../constants/auth');

const userSchema = mongoose.Schema({
    [USERNAME]: {
        type: String,
        require: true
    },
    [PASSWORD]: {
        type: String,
        require: true
    },
    [EMAIL]: {
        type: String,
        require: true
    },
    [DATE]: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('user', userSchema);