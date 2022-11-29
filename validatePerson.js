module.exports = {

    validatePerson: function (reqBody) {

        const Joi = require('joi')
        const personValidation = Joi.object({
            id: Joi.string()
                .alphanum()
                .max(18)
                .required(),
            first_name: Joi.string()
                .min(3)
                .max(30)
                .required(),
            last_name: Joi.string()
                .min(3)
                .max(30)
                .required(),
            email: Joi.string()
                .email({ tlds: { allow: false } })
                .required(),
            job_title: Joi.string()
                .valid('Structural Engineer', 'Chief Design Engineer', 'Desktop Support Technician', 'Sales Associate')
        })
    
        const {error} = personValidation.validate(reqBody, {
            abortEarly: false
        })
        return error;
    },
    
}