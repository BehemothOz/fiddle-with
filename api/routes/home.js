const express = require('express');
const router = express.Router();
const guard = require('./verifyToken');

router.get('/', guard, (req, res) => {
    res.status(200).json({ status: 'ok' });
});

router.post('/create', guard, (req, res) => {
    // validation
    // add db
})

module.exports = router;