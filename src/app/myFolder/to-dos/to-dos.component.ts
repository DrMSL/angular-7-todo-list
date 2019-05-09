import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service';

import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-to-dos',
  templateUrl: './to-dos.component.html',
  styleUrls: ['./to-dos.component.css']
})
export class ToDosComponent implements OnInit {
  title: string = "my list of things to do";
  todos: Todo[];

  addTache(newTache: string) {
    if (newTache) {
      this.title = newTache;
    }
  }


  constructor(private todoService:TodoService) { }

  ngOnInit() {
    this.todoService.getTodos().subscribe(todos =>{
      this.todos = todos;
    });
    
  }

  deleteTodo(todo:Todo) {
    console.log('delete me');

    // deleting in the UI - filtering all of the todos, 
    //and returning all of the them that don't have that id
    
    this.todos = this.todos.filter(t => t.id !== todo.id);

    // Remove from server
    this.todoService.deleteTodo(todo).subscribe();
  }

  addTodo(todo:Todo) {
    this.todoService.addTodo(todo).subscribe(todo => {
      this.todos.push(todo);
    });
  }

}
