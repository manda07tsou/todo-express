import { param, query } from "express-validator";

export const idParamsValidationSchema =  param('id').isNumeric().toInt()

//validation et ajout valeur par defaut pour la params page pour la pagination
export const pageParamsValidationSchema = query('page')
    .default(1)
    .isNumeric()
    .toInt()


//validation et ajout valeur par defaut pour la params itemsPerPage pour la pagination
export const itemPerPageParamsValidationSchema = query('itemPerPage')
    .default(5)
    .isNumeric()
    .toInt()