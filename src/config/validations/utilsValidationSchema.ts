import { param } from "express-validator";

export const idParamsValidationSchema =  param('id').isNumeric().toInt()
