import { Component, OnInit } from '@angular/core';
import {DataService} from '../services/data.service';
@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {
  todoArray=[];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.todoArray=this.dataService.getTodoList();
  }
  addTodo(value){    
    if(value==""){
      //setTimeout(function() {
        alert('Please enter a value!');
    //}, 200);
    }
    else{
      this.todoArray.push(value);  
      this.dataService.setTodoList(this.todoArray);
      alert(value+' has been inserted!');
    }
    }
    
      keyDownFunction(event) {
        //Press enter to trigger btn click
        if (event.keyCode === 13) {
          event.preventDefault();
          let element: HTMLElement = document.getElementById('addBtn') as HTMLElement;
          element.click();
        }
      }
}
