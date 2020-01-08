const express = require('express');
const bcrypt = require('bcryptjs');
const router = express.Router();
const User = require('../models/user');
const { validateRegistration } = require('./validation');
const [ USERNAME, EMAIL, PASSWORD ] = require('../constants/auth');

router.post('/', async (req, res, next) => {
    // Validate the data
    const { error } = validateRegistration(req.body);
    if (error) return next({ type: 'validation', body: error });

    const { name, email, password } = req.body;

    // Checking if the user is already in the database
    const existUser = await User.findOne({ [EMAIL]: email });
    if (existUser) return next({ status: 400, body: 'Email already exists'});

    // Hashing password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
        [USERNAME]: name,
        [EMAIL]: email,
        [PASSWORD]: hashedPassword
    });

    try {
        const newUser = await user.save();
        res.status(200).json(newUser);
    } catch (error) {
        // res.status(400).json({ message: error.message });
        next({ status: 400, body: error.message })
    }
})

module.exports = router;
