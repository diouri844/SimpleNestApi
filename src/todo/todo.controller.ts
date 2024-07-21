
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { Todo } from "@prisma/client";

@Controller("todos")
export class TodoController {
    constructor(private TodoProvider: TodoService) { };
    // time to define routes : 
    @Post()
    async createTodo(@Body() TodoPayload: Todo) {
        const result: Todo | null = await this.TodoProvider.createTodo(TodoPayload);
        // time to check 
        if (!result) {
            return {
                message: "Server can not create new todo"
            }
        };
        return {
            message: "New Todo Created Successufully",
            data: result
        }
    };
    @Get("/all")
    async getTodoList() {
        const todoList: Todo[] = await this.TodoProvider.retriveAll();
        return {
            message: "All todo retrived successfully",
            data: todoList
        };
    };
    @Get("/item/:id")
    async getTodoById(@Param() params: { id: string }) {
        const res: Todo | null = await this.TodoProvider.findTodo(params.id);
        if (!res) {
            return {
                message: "Server can not find  todo with ref : " + params.id
            }
        }
        return {
            message: "Todo Item retrived successfully",
            data: res
        };
    }
};