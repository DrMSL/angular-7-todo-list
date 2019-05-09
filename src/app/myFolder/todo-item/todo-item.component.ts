import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})

export class TodoItemComponent implements OnInit {
  
  @Input() todo: Todo;
  // to delete the item
  @Output() deleteTodo: EventEmitter<Todo> = new EventEmitter();

  addTache(newTache: string) {
    if (newTache) {
      this.todo.title = newTache;
    }
  }

  constructor(private todoService:TodoService) { }

  ngOnInit() {
  }

  // Set Dynamic Classes
  setClasses() {
    let classes = {
      todo:true,
      'is-complete': this.todo.completed   
      //need quotes because of hyphen in class name
    }
    return classes;
  }// fin de setClasses

  
  
  onToggle(todo) {
    console.log('toggle');
    // Toggle in UI
    todo.completed = !todo.completed;
    // Toggle on server
    this.todoService.toggleCompleted(todo).subscribe(todo => console.log(todo));
  }

  onDelete(todo) {
    console.log('delete');
    this.deleteTodo.emit(todo);
  }


}
