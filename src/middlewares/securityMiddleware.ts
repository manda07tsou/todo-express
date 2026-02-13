import type {Request, Response, NextFunction} from "express"
import jwt from 'jsonwebtoken';

export const securityMiddleware = (req: Request, res: Response, next: NextFunction) => {
    let auth = req.headers.authorization

    if(!auth && !auth?.startsWith('Bearer')){
        return res.status(401).json({ message: 'Token manquant' });
    }

    const token = auth.substring(7);

    try {
        jwt.verify(token, process.env.TOKEN_SECRET_KEY as string)
        next()
    } catch (error) {
        res.status(401).json({message: "Token invalid"})
    }
}