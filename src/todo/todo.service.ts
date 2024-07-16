import { Injectable } from "@nestjs/common";
import { TodoItem } from "./interfaces/todo.interface";




@Injectable()
export class TodoService {
    private readonly TodoList: TodoItem[] = [
        {
            id: "todo1",
            label: "My Todo ",
            description: "bla bla bla ",
            state: "Pending"
        }
    ];
    // let define some actions :
    createTodo(todo: TodoItem): void { };
    findTodo(critaire: string): TodoItem[] {
        return [] as TodoItem[];
    };
    retriveAll(): TodoItem[] {
        return this.TodoList;
    };
};