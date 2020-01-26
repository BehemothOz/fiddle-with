const express = require('express');
const router = express.Router();
const guard = require('./verifyToken');
const Dictionary = require('../models/dictionary');

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

    console.log(req.user)

    try {
        const dictionary = Dictionary({
            title: req.body.title,
            description: req.body.description,
            user: req.user._id
        });

        const newDictionary = await dictionary.save();

        res.status(200).json(newDictionary)
    } catch (error) {
        next({ status: 400, body: error.message })
    }
})

module.exports = router;