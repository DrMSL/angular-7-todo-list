import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent implements OnInit {
  
  // this is where i output my new event emitter
  @Output() addTodo: EventEmitter<any> = new EventEmitter();

  title:string;
  constructor() { }

  ngOnInit() {
  }


  // telling the server json placeholder what to do when i submit
  // we don't need the id, that is handled by the server
  onSubmit() {
    const todo = {
      title: this.title,
      completed: false
    }

    // emitting upward the todo just created on the onSubmit
    this.addTodo.emit(todo);

  }

}
