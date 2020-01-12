const Joi = require('@hapi/joi');
const { USERNAME, EMAIL, PASSWORD } = require('../constants/user');

const validateRegistration = data => {
    console.log(data)
    const schema = Joi.object({
        [USERNAME]: Joi.string().trim().required(),
        [EMAIL]: Joi.string().trim().email().required(),
        [PASSWORD]: Joi.string().trim().required(),
    });

    return schema.validate(data, { abortEarly: false });
}

const validateAuthorization = data => {
    const schema = Joi.object({
        [EMAIL]: Joi.string().trim().email().required(),
        [PASSWORD]: Joi.string().trim().required()
    })

    return schema.validate(data, { abortEarly: false });
}

module.exports.validateRegistration = validateRegistration;
module.exports.validateAuthorization = validateAuthorization;

