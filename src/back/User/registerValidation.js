const Joi = require('@hapi/joi');

const registerValidation = (data) => {
    const registerSchema = Joi.object({
        firstName: Joi.string().min(3).required(),
        lastName: Joi.string().min(3).required(),
        email: Joi.string().min(8).required().email(),
        password: Joi.string().min(6).required
    });
    return registerSchema.validate(data);
};

module.exports.registerValidation = registerValidation;


