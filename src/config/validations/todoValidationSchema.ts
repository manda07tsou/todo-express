import { body } from "express-validator";


export const todoCreateValidationSchema = [
    body('title')
        .isLength({ min: 3 }).withMessage('Le titre doit avoir au moins 3 caractères')
        .notEmpty().withMessage('Le titre est requis'),
    body('content')
        .isString().notEmpty(),
    body('published')
        .isBoolean(),
    body('author')
        .isNumeric()
        .toInt()
]

export const todoUpdateValidationSchema = [
    body('title')
        .optional()
        .isLength({ min: 3 }).withMessage('Le titre doit avoir au moins 3 caractères')
        .notEmpty().withMessage('Le titre est requis'),
    body('content')
        .optional()
        .isString().notEmpty(),
    body('published')
        .optional()
        .isBoolean()
]
