const express = require('express');
const router = express.Router();
const guard = require('./verifyToken');
const Dictionary = require('../models/dictionary');
const { TITLE, DESCRIPTION } = require('../constants/dictionary');
const { USER } = require('../constants/models');

router.get('/', guard, async (req, res) => {
    try {
        const dictionaries = await Dictionary.find({ [USER]: req.user._id })

        res.status(200).json(dictionaries);
    } catch (error) {
        next({ status: 400, body: error.message })
    }
});

router.get('/:id', guard, async (req, res) => {
    try {
        const id = req.params.id;
        const dictionary = await Dictionary.findOne({ [USER]: req.user._id, _id: id });

        res.status(200).json(dictionary);
    } catch (error) {
        next({ status: 400, body: error.message })
    }
});


router.post('/', guard, async (req, res) => {

    // TODO: add validation

    try {
        const dictionary = Dictionary({
            [TITLE]: req.body.title,
            [DESCRIPTION]: req.body.description,
            [USER]: req.user._id
        });

        const newDictionary = await dictionary.save();

        res.status(200).json(newDictionary)
    } catch (error) {
        next({ status: 400, body: error.message })
    }
})

module.exports = router;