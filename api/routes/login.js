const express = require('express');
const jwt = require('jsonwebtoken');

const router = express.Router();
const User = require('../models/user');
const validateAuthorization = require('./validation');
const [ EMAIL ] = require('../constants/auth');

router.post('/', async (req, res, next) => {
    // Validate the data
    const { error } = validateAuthorization(req.body);
    if (error) return next({ status: 400, body: 'Email or Password is wrong' });

    // Checking if the user is already in the database
    const user = await User.findOne({ [EMAIL]: req.body.email });
    if (!user) return next({ status: 400, body: 'User does not exists' });

    // TODO: add validation password hash

    try {
        // Create and assign token (jwt)
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET)
        res.header('Authorization', token).json({ token });
    } catch (error) {
        next({ status: 400, body: error.message })
    }
});

module.exports = router;