const Joi = require('@hapi/joi');
const [ USERNAME, EMAIL, PASSWORD ] = require('../constants/auth');

const validateRegistration = data => {
    const schema = Joi.object({
        [USERNAME]: Joi.string().required(),
        [EMAIL]: Joi.string().email().required(),
        [PASSWORD]: Joi.string().required(),
    });

    return schema.validate(data, { abortEarly: false });
}

module.exports = validateRegistration;

