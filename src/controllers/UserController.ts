import type {Request, Response} from 'express'
import { prisma } from '../config/db.config'

export const Liste = async (req: Request, res: Response) => {
    let data = await prisma.author.findMany()

    res.json(data)
}

export const CreateUsers = async (req: Request, res: Response) => {
    let data = await req.body
    let todo = await prisma.author.create({
        data: data
    })

    res.json(todo)
}