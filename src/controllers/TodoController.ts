import type { Request, Response } from "express"
import { prisma } from "../config/db.config";
import { matchedData } from "express-validator";
import { TodoCreateInput } from '../../generated/prisma/models/Todo';

export const Index = async (req: Request, res:Response) => {
    const data = await prisma.todo.findMany()
    
    res.json(data);
}

export const Detail = async (req: Request, res:Response) => {
    const todoId:number = matchedData(req).id

    const data = await prisma.todo.findUnique({
        where: {
            id: todoId
        }
    })

    res.json(data);
}

export const Create = async (req: Request, res: Response) => {
    const data: TodoCreateInput = matchedData(req)

    let response = await prisma.todo.create({
        data: data
    })

    res.json(response)
}