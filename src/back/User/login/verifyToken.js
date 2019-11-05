const jwt = require('jsonwebtoken');
const secret = require('./secret');

// Token Schema:
// Authorization: Bearer <access_token>

const authentication =  (req, res, next) => {
    const bearerHeader  = req.headers['authorization'];
    if( typeof bearerHeader  !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        req.token = bearer[1];

    } else {
        res.status(404).send('error')
    }
    jwt.verify(req.token, secret.secret, (err, authData) => {
        if (err) {
            res.sendStatus(403);
        } else {
            req.decoded = authData;
        }
        next();
    });
};

module.exports = authentication;
