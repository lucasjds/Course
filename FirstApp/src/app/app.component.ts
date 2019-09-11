import { Component } from '@angular/core';
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : Todo[] = [];
  public title: String = 'Minhas tarefas';
  
  constructor() {
    this.todos.push(new Todo(1, 'primeira', false));
    this.todos.push(new Todo(2, 'segunda', true));
    this.todos.push(new Todo(3, 'terceira', true));
    
    
  }

  remove(todo : Todo){
    const index = this.todos.indexOf(todo);
    if(index !== -1){
      this.todos.splice(index, 1);
    }
  }

  markAsDone(todo : Todo){
    todo.done = true;
  }

  markAsUndone(todo : Todo){
    todo.done = false;
  }

}
