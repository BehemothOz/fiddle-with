const express = require('express');
const router = express.Router();
const User = require('../models/user');
const validateAuthorization = require('./validation');

router.post('/', async (req, res, next) => {
    try {
        // Validate the data
        const { error } = validateAuthorization(req.body);
        if (error) return next({ status: 400, body: 'Email or Password is wrong' });

        // Checking if the user is already in the database
        const existUser = await User.findOne({ email: req.body.email });
        if (!existUser) return next({ status: 400, body: 'User does not exists' });

        // TODO: add validation password



        res.status(200).json({ status: 'ok' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;