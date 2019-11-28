const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.post('/', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(400).send('User does not exists');
        }
        res.status(200).json({ status: 'ok' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

module.exports = router;