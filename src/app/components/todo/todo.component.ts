import {Component, Input} from '@angular/core';
import {Todo} from '../../models/todo';
@Component({
    selector: 'app-todo',
    templateUrl: './todo.component.html'
})

export class TodoComponent {
    @Input() todo: Todo;
}
