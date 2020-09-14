import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  todoArray=[];
  constructor() { }
  getTodoList(){
    return this.todoArray;
  }
  setTodoList(newtodoArr){
    this.todoArray=newtodoArr;
  }
}
