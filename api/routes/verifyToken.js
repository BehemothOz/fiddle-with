const jwt = require('jsonwebtoken');

const guard = (req, res, next) => {
    const token = req.header('authorization');

    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(406).send('Invalid token');
    }
}

module.exports = guard;