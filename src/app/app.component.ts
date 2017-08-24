import {Component, OnInit, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {TodoService} from './services/todo.service';
import {Todo} from './models/todo';
import {Observable} from 'rxjs';
import {FriendService} from './services/frinds.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    providers: [TodoService, FriendService]
})
export class AppComponent implements OnInit {
    title = 'app';
    todos: Todo[];
    @ViewChild('todoName') todoName: ElementRef;
    list = [1,2,3,4];
    current = 0;
    friends = [];

    constructor(public todoService: TodoService, public friendService: FriendService) {
    }

    ngOnInit() {
        this.todos = this.todoService.getTodos();
        this.friends = this.friendService.getFriends();
        setInterval(() => {
            console.log('interval');
            this.next();
        },3000);
    }


    addTodo(name) {
        this.todoService.add(new Todo(name));
        this.todoName.nativeElement.value = '';
    }

    delete(index){
        this.todoService.delete(index);
    }

    next() {

        if(this.current < this.list.length-1){
            this.current++;
        }else {
            this.current = 0;
        }

    }

    prev() {

        if(this.current > 0){
            this.current--;
        }else {
            this.current = this.list.length-1;
        }


    }






}
const simpleObservable = new Observable((observer) => {
    observer.next("bla bla bla");
    observer.complete();
});

simpleObservable.subscribe((val) => {
    console.log(val);
});
