import { body } from "express-validator";

export const loginValidationSchema = [
    body('username').notEmpty().isEmail(),
    body('password').notEmpty().isString()
]