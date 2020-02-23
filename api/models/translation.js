const mongoose = require('mongoose');
const { ENTRY, OUTPUT, DATE } = require('../constants/translation');
const { DICTIONARY } = require('../constants/models');

const TranslationSchema = mongoose.Schema({
    [ENTRY]: {
        type: String,
        require: true
    },
    [OUTPUT]: {
        type: String,
        require: true
    },
    [DATE]: {
        type: Date,
        default: Date.now
    },
    [DICTIONARY]: { type: mongoose.Types.ObjectId, ref: DICTIONARY }
});

module.exports = mongoose.model('translation', TranslationSchema);