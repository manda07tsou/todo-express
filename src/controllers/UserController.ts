import type {Request, Response} from 'express'
import { prisma } from '../config/db.config'
import { matchedData } from 'express-validator'
import * as Author from '../../generated/prisma/models/Author'

export const Liste = async (req: Request, res: Response) => {
    let data = await prisma.author.findMany()
    res.json(data)
}

export const CreateUsers = async (req: Request, res: Response) => {
    let data: Author.AuthorCreateInput = matchedData(req)
    let user = await prisma.author.create({
        data: data
    })
    
    res.json(user)
}