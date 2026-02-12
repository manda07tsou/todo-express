import { body, query } from "express-validator";
import { PriorityValue } from "../constantes/priorityConstant";
import { itemPerPageParamsValidationSchema, pageParamsValidationSchema } from "./utilsValidationSchema";


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
        .toInt(),
    body('priority')
        .isNumeric()
        .notEmpty()
        .isIn(PriorityValue)
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
        .isBoolean(),
    body('priority')
        .optional()
        .isIn(PriorityValue)
]

export const todoFiltersValidationSchema = [
    query('published').optional().isBoolean().toBoolean(),
    pageParamsValidationSchema,
    itemPerPageParamsValidationSchema
]
