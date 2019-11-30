const Joi = require('@hapi/joi');
const [ USERNAME, EMAIL, PASSWORD ] = require('../constants/auth');

const validateRegistration = data => {
    const schema = Joi.object({
        [USERNAME]: Joi.string().trim().required(),
        [EMAIL]: Joi.string().trim().email().required(),
        [PASSWORD]: Joi.string().trim().required(),
    });

    return schema.validate(data, { abortEarly: false });
}

module.exports = validateRegistration;

