import { body } from "express-validator";

export const useValidationSchema = [
    body('email').notEmpty().isEmail(),
    body('name').notEmpty().isString().isLength({min: 3}),
    body('password').notEmpty().isLength({min: 4})
]