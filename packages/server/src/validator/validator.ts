import Joi from 'joi';

export const signupSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});

export const signinSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
});


