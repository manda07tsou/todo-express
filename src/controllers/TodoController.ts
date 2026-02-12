import type { Request, Response } from "express"
import { prisma } from "../config/db.config";

export const Index = async (req: Request, res:Response) => {
    const data = await prisma.todo.findMany()

    res.json(data);
}

export const Detail = async (req: Request, res:Response) => {
    const todoId:number = parseInt(req.params.id)

    const data = await prisma.todo.findUnique({
        where: {
            id: todoId
        }
    })

    res.json(data);
}

export const Create = async (req: Request, res: Response) => {
    const data = await req.body

    let response = await prisma.todo.create({
        data: data
    })

    res.json(response)
}