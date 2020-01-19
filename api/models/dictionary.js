const mongoose = require('mongoose');
const { WORD, TRANSFER, DATE } = require('../constants/dictionary');
const { USER, DICTIONARY } = require('../constants/models');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    'words': [{ type: mongoose.Types.ObjectId, ref: 'Word' }],
    'user': { type: mongoose.Types.ObjectId, ref: USER }
});

module.exports = mongoose.model(DICTIONARY, userSchema);