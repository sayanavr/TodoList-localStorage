import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoArray=[];
  constructor() { }
  getTodoList(){
    if(localStorage.getItem('todoArray')===null){
      this.todoArray=[];
    }
    else{
      this.todoArray=JSON.parse(localStorage.getItem('todoArray'));
    }
    return this.todoArray;
  }
  setTodoList(newtodoArr){
    this.todoArray=newtodoArr;
    localStorage.setItem('todoArray',JSON.stringify(this.todoArray));
  }
}
