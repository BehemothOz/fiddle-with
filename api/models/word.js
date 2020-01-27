const mongoose = require('mongoose');

const wordSchema = mongoose.Schema({
    word: {
        type: String,
        require: true
    },
    transfer: {
        type: String,
        require: true
    },
    dictionary: { type: mongoose.Types.ObjectId, ref: 'dictionary' }
});

module.exports = mongoose.model('word', wordSchema);