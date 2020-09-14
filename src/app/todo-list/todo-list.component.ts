import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoArray=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.todoArray=this.dataService.getTodoList();
  }
  deleteItem(todo){
    for(let i=0 ;i<= this.todoArray.length ;i++){
       if(todo== this.todoArray[i]){ 
          this.todoArray.splice(i,1)    
        }   
      }  
      this.dataService.setTodoList(this.todoArray);
    }
}
