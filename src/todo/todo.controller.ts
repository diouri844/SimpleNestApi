
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoItem } from "./interfaces/todo.interface";


@Controller("todos")
export class TodoController {
    constructor(private TodoProvider: TodoService) { };
    // time to define routes : 
    @Post()
    async createTodo(@Body() TodoPayload: TodoItem) {
        return this.TodoProvider.createTodo(TodoPayload);
    };
    @Get("/all")
    async getTodoList() {
        return {
            message: "All todo retrived successfully",
            data: this.TodoProvider.retriveAll()
        };
    };
    @Get("/item/:id")
    async getTodoById(@Param() id: string) {
        console.log(id);
        const res: TodoItem = this.TodoProvider.findTodo(id);
        console.log(res);
        return {
            message: "Todo Item retrived successfully",
            data: res
        };
    }
};