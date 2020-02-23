const express = require('express');
const router = express.Router();
const guard = require('./verifyToken');
const Translation = require('../models/translation');
const { ENTRY, OUTPUT } = require('../constants/translation');
const { DICTIONARY } = require('../constants/models');

router.get('/:id', guard, async (req, res) => {
    try {
        const id = req.params.id;
        const translations = await Translation.find({ dictionary: id });

        res.status(200).json(translations);
    } catch (error) {
        next({ status: 400, body: error.message })
    }
});

router.post('/', guard, async (req, res) => {

    // TODO: add validation

    try {
        const translation = Translation({
            [ENTRY]: req.body.entry,
            [OUTPUT]: req.body.output,
            [DICTIONARY]: req.body.id
        });

        const newTranslation = await translation.save();

        res.status(200).json(newTranslation)
    } catch (error) {
        next({ status: 400, body: error.message })
    }
})

module.exports = router;