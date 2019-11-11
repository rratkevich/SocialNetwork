const User = require('../userSchema');
const jwt = require('jsonwebtoken');
const secret = require('./secret');
const bcrypt = require('bcrypt');
const {loginValidation} = require('./loginValidation');

async function loginUser(req, res) {
    // validate data
    const {error} = loginValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    const userExist = await User.findOne({email: req.body.email});
    if (!userExist) return res.status(404).send('There is no user with such email');
    const passwordValid = await bcrypt.compare(req.body.password, userExist.password);
    if (!passwordValid) return res.status(404).send('Password is not valid');

    if (userExist) {
        jwt.sign({userExist}, secret.secret, {expiresIn: '24h'}, (err, token) => {
            if (err) {
                res.send(err.message);
            } else {
                res.json({token});
            }
        });
    } else {
        res.status(403).send('Wrong input data!')
    }
}

module.exports = loginUser;
