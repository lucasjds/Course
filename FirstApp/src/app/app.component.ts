import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public todos : any[] = [];
  public title: String = 'Minhas tarefas';
  
  constructor() {
    this.todos.push('test 123');
    this.todos.push('test 1234');
    this.todos.push('test 1235');
    
  }

  alteraTexto(){
    this.title = 'Novo titulo';
  }
}
