import {Injectable} from '@angular/core';
import {Todo} from '../models/todo';
@Injectable()
export class TodoService {

    todos: Todo[] = [];


    getTodos() {
        return this.todos;
    }

    add(todo: Todo) {
        this.todos.push(todo);
    }

    delete(index:number){
        this.todos.splice(index,1);
    }
}
