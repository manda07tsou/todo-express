import { todo } from "node:test";
import { Todo } from "../../generated/prisma/client";
import { todoFiltersType } from "../@types/todoTypes";
import { PriorityLabel } from "../config/constantes/priorityConstant";
import { prisma } from "../config/db.config";
import { paginationType } from "../@types/paginationTypes";

export class TodoServices{
    static async getTodos(filters: todoFiltersType, pagination: paginationType){
        let published = filters.published
        const filtersClause:any = {}
        if(published !== undefined && published != null) filtersClause.published = published

        let data = await prisma.todo.findMany({
            where: filtersClause,
            ...pagination
        })

        return this.formatTodo(data)
    }

    static async getTodoById(id:number){
        const data = await prisma.todo.findUnique({
            where: {
                id: id
            }
        })
        return this.formatTodo(data)
    }

    private static formatTodo(data: Todo|Todo[]|null){
        if(data){
            if(data instanceof Array){
                return data.map(todo => ({
                    ...todo,
                    priorityLabel: PriorityLabel[todo.priority]
                }))
            }else{
                return {
                    ...data,
                    priorityLabel: PriorityLabel[data.priority]
                }
            }
        }
        return [];
    }
}