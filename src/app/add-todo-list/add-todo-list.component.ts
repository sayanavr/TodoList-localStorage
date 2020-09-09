import { Component, OnInit } from '@angular/core';
import {AppComponent} from '../app.component';
@Component({
  selector: 'app-add-todo-list',
  templateUrl: './add-todo-list.component.html',
  styleUrls: ['./add-todo-list.component.css']
})
export class AddTodoListComponent implements OnInit {

  constructor(public myapp: AppComponent) { }

  ngOnInit(): void {
  }
  todoArray=this.myapp.getTodoList();
  addTodo(value){    
    if(value==""){
      //setTimeout(function() {
        alert('Please enter a value!');
    //}, 200);
    }
    else{
      this.todoArray.push(value);  
      this.myapp.setTodoList(this.todoArray);
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
