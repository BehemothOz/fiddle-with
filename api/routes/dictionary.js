const express = require('express');
const router = express.Router();
const guard = require('./verifyToken');
const Dictionary = require('../models/dictionary');
const { WORD, TRANSFER } = require('../constants/dictionary');

router.get('/', guard, async (req, res) => {
    try {
        const dictionary = await Dictionary.find({ user: req.user._id })
        res.status(200).json(dictionary);
    } catch (error) {
        next({ status: 400, body: error.message })
    }
});

router.post('/', guard, async (req, res) => {
    // TODO: add validation
    try {
        const word = Dictionary({
            [WORD]: req.body.word,
            [TRANSFER]: req.body.transfer,
            user: req.user._id
        });

        const newWord = await word.save();
        res.status(200).json(newWord)
    } catch (error) {
        next({ status: 400, body: error.message })
    }
})

module.exports = router;