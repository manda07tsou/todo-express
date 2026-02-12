import type { Request, Response } from "express"
import { prisma } from "../config/db.config";
import { matchedData } from "express-validator";
import { TodoCreateInput, TodoUpdateInput } from '../../generated/prisma/models/Todo';

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
    const data = matchedData(req)

    const todoData: TodoCreateInput = {
        title: data.title,
        content: data.content,
        published: data.published,
        author: {
            connect: {
                id: data.author
            }
        }
    }

    let response = await prisma.todo.create({
        data: todoData
    })

    res.json(response)
}

export const Update = async (req: Request, res:Response) => {
    const data = matchedData(req)

    const todoData: TodoUpdateInput = {
        title: data.title,
        content: data.content,
        published: data.published
    }

    let response = await prisma.todo.update({
        where: {id: data.id},
        data: todoData
    })

    res.json(response)
}