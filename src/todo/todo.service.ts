import { Injectable } from "@nestjs/common";
import { PrismaClient, Todo } from "@prisma/client";
import * as _ from "lodash";



@Injectable()
export class TodoService {
    // let define some actions :
    private MyPrismaClient = new PrismaClient();
    async createTodo(todo: Todo): Promise<Todo | null> {
        const createdTodo: Todo | null = await this.MyPrismaClient.todo.create({
            data: todo
        });
        return createdTodo;
    };
    async findTodo(id: string): Promise<Todo | null> {
        const todoTarget: Todo | null = await this.MyPrismaClient.todo.findUnique({
            where: {
                id
            }
        });
        return todoTarget;
    };
    async retriveAll(): Promise<Todo[]> {
        const response: Todo[] = await this.MyPrismaClient.todo.findMany();
        return response;
    };
    async removeItem(id: string): Promise<boolean> {
        return await this.MyPrismaClient.todo.delete({
            where: {
                id
            }
        }) != null
    }
};