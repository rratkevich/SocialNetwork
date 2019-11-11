const bcrypt = require('bcrypt');
const User = require('../userSchema');
const {registerValidation} = require('./registerValidation');

async function registerUser(req, res) {
    // validate data
    const {error} = registerValidation(req.body);
    if (error) return res.status(400).send(error.details[0].message);
    // check user email
    const emailExist = await User.findOne({email: req.body.email});
    if (emailExist) return res.status(400).send('email exist');

    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    // create new user
    const user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: hashedPassword
    });
    try {
        const savedUser = await user.save();
        res.send(savedUser);
    } catch (err) {
        res.status(404).send(err.message);
    }
}

module.exports = registerUser;
