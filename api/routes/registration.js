// const express = require('express');
// const router = express.Router();
const router = require('express').Router();

router.post('/reg', (req, res) => {
    // res.send('hi');
    res.status(200).send('ok')
})

module.exports = router;
