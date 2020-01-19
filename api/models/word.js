const mongoose = require('mongoose');
const { WORD, TRANSFER, DATE } = require('../constants/dictionary');
const { USER, DICTIONARY } = require('../constants/models');

const userSchema = mongoose.Schema({
    [WORD]: {
        type: String,
        require: true
    },
    [TRANSFER]: {
        type: String,
        require: true
    },
    [DATE]: {
        type: Date,
        default: Date.now
    },
    'dictionary': { type: mongoose.Types.ObjectId, ref: 'Dictionary' }
});

module.exports = mongoose.model(WORD, userSchema);