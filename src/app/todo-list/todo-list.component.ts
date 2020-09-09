import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  constructor(public myapp: AppComponent) { }

  ngOnInit(): void {
  }
  todoArray=this.myapp.getTodoList();
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
       if(todo== this.todoArray[i]){ 
          this.todoArray.splice(i,1)    
        }   
      }  
      this.myapp.setTodoList(this.todoArray);
    }
}
