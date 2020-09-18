import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../services/data.service';
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoArray=[];
  enableEdit=false;
  currentTodoItem='';
  newText='';
  todoList:string;
  // @Input() currentTodoItem: string;
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
  editItem(todo){
    this.enableEdit=true;
    this.currentTodoItem=todo;
    this.newText=todo;
  }
  editCurrentItem(){
    for(let i=0 ;i<= this.todoArray.length ;i++){
      if(this.currentTodoItem== this.todoArray[i]){ 
         this.todoArray.splice(i,1)    
       }   
     }
    this.todoArray.unshift(this.newText);
    this.dataService.setTodoList(this.todoArray);
  }
}
