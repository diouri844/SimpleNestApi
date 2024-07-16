
import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { TodoService } from "./todo.service";
import { TodoItem } from "./interfaces/todo.interface";


@Controller("Todos")
export class TodoController {
    constructor(private TodoProvider: TodoService) { };
    // time to define routes : 
    @Post()
    async createTodo(@Body() TodoPayload: TodoItem) {
        this.TodoProvider.createTodo(TodoPayload);
    };
    @Get()
    async getTodoList() {
        this.TodoProvider.retriveAll();
    };
    @Get("/:id")
    async getTodoById(@Param() id: string) {
        this.getTodoById(id);
    }
};