import type { Request, Response } from "express"
import { matchedData } from "express-validator"
import { prisma } from "../config/db.config"
import jwt from "jsonwebtoken"
import { loginTypes } from "../@types/authTypes"
import bcrypt from 'bcrypt';

export const Login = async(req: Request, res: Response) => {
    const data: loginTypes = matchedData(req)

    const user = await prisma.author.findUnique({
        where: {
            email: data.username
        }
    })

    if(!user){
        res.status(401).json({message: 'Identifiant invalides'})
    }

    const isValidPassword = await bcrypt.compare(data.password, user?.password as string)

    if(!isValidPassword){
        res.status(401).json({message: 'Mot de passe incorrect'})
    }

    const token = jwt.sign(
        {username: user?.email, userId: user?.id},
        process.env.TOKEN_SECRET_KEY as string
    )

    res.json({
        token,
        user: {
            id: user?.id,
            username: user?.name,
            email: user?.email
        }
    })
}