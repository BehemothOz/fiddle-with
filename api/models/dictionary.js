const mongoose = require('mongoose');
const { TITLE, DESCRIPTION, DATE } = require('../constants/dictionary');
const { USER, DICTIONARY } = require('../constants/models');

const dictionarySchema = mongoose.Schema({
    [TITLE]: {
        type: String,
        require: true
    },
    [DESCRIPTION]: {
        type: String,
        require: true
    },
    [DATE]: {
        type: Date,
        default: Date.now
    },
    [USER]: { type: mongoose.Types.ObjectId, ref: USER }
});

module.exports = mongoose.model(DICTIONARY, dictionarySchema);