import type {Request, Response, NextFunction} from "express"
import { validationResult } from "express-validator"

export const validatorMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req)

    if(result.isEmpty()){
        next()
    }else{
        res.json(result);
    }
}
