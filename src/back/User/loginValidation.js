const Joi = require('@hapi/joi');

const loginValidation = () => {
    const loginSchema = Joi.object({
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(6).required
    });
    return loginSchema.validate(loginSchema);
};

module.exports.loginValidation = loginValidation;
