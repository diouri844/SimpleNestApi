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
    createTodo(todo: TodoItem): TodoItem[] {
        this.TodoList.push(todo);
        return this.TodoList;
    };
    findTodo(id: string): TodoItem {
        return this.TodoList.filter(item => item.id === id)[0];
    };
    retriveAll(): TodoItem[] {
        return this.TodoList;
    };
    removeItem(id: string): TodoItem[] {
        return this.TodoList.filter(
            item => item.id !== id
        );
    }
};