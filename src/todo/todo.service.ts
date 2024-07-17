import { Injectable } from "@nestjs/common";
import { TodoItem } from "./interfaces/todo.interface";




@Injectable()
export class TodoService {
    private readonly TodoList: TodoItem[] = [];
    constructor() {
        this.TodoList.push({
            id: "todo1",
            label: "My Todo ",
            description: "bla bla bla ",
            state: "Pending"
        });
    }
    // let define some actions :
    createTodo(todo: TodoItem): TodoItem[] {
        this.TodoList.push(todo);
        return this.TodoList;
    };
    findTodo(id: string): TodoItem {
        let target: TodoItem = {
            id: "",
            label: "",
            description: "",
            state: ""
        };
        const arr = this.TodoList[0]
        console.log(arr[0]);
        return arr[0] as TodoItem;
    };
    retriveAll(): TodoItem[] {
        const response: TodoItem[] = this.TodoList;
        return response;
    };
    removeItem(id: string): TodoItem[] {
        return this.TodoList.filter(
            item => item.id !== id
        );
    }
};