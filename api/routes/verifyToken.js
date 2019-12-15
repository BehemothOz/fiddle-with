const jwt = require('jsonwebtoken');

const guard = (res, req, next) => {
    const token = res.header('auth-tokent');

    if (!token) return res.status(401).send('Access denied');

    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid token');
    }
}

module.exports = guard;