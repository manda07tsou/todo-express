import type { Request, Response } from "express"
import { prisma } from "../config/db.config";
import { matchedData } from "express-validator";
import { TodoCreateInput, TodoUpdateInput } from '../../generated/prisma/models/Todo';
import { TodoServices } from "../services/todoServices";


export const Index = async (req: Request, res:Response) => {
    const {published} = matchedData(req, {locations: ['query']});
    let data = await TodoServices.getTodos({published})

    res.json(data);
}

//retrieve todo
export const Detail = async (req: Request, res:Response) => {
    const todoId:number = matchedData(req).id

    const data = await TodoServices.getTodoById(todoId)

    res.json(data);
}

//create todo
export const Create = async (req: Request, res: Response) => {
    const data = matchedData(req)

    const todoData: TodoCreateInput = {
        title: data.title,
        content: data.content,
        published: data.published,
        priority: data.priority,
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

//update todo
export const Update = async (req: Request, res:Response) => {
    const id:number = matchedData(req, {locations: ['params']}).id
    const data = matchedData(req, {locations: ['body']})

    const todoData: TodoUpdateInput = {
        title: data.title,
        content: data.content,
        published: data.published,
        priority: data.priority
    }

    let response = await prisma.todo.update({
        where: {id: id},
        data: todoData
    })

    res.json(response)
}

//delete todo
export const Delete = async (req: Request, res: Response) => {
    const id:number= matchedData(req).id;

    await prisma.todo.delete({
        where: {
            id: id
        }
    })

    res.status(404).json([])
}