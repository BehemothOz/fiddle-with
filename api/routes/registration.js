const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    const { name, email, password } = req.body;
    console.log(req.body)
    // const user = new User({
    //     name: 'Ivan',
    //     email: 'ivan@main.com',
    //     password: '12345qwer'
    // });

    try {
        // const newUser = await user.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

module.exports = router;
