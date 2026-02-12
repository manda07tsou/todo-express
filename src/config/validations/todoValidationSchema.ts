import { body } from "express-validator";


export const todoValidationSchema = [
    body('title')
        .isLength({ min: 3 }).withMessage('Le titre doit avoir au moins 3 caractères')
        .notEmpty().withMessage('Le titre est requis'),
]
