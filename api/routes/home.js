const express = require('express');
const router = express.Router();
const guard = require('./verifyToken');

router.get('/', guard, (req, res) => {
    res.status(200).json({ status: 'ok' });
});

module.exports = router;