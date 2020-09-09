import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  todoArray=[];
  addTodo(value){    
    this.todoArray.push(value);  
    }
    deleteItem(todo){
      for(let i=0 ;i<= this.todoArray.length ;i++){
         if(todo== this.todoArray[i]){ 
            this.todoArray.splice(i,1)    
          }   
        }  
      }
      keyDownFunction(event) {
        if (event.keyCode === 13) {
          //alert('you just pressed the enter key');
          // rest of your code
          //this.addTodo(todo);
          //$("#GFG_Button").click(); 
          event.preventDefault();
          let element: HTMLElement = document.getElementById('addBtn') as HTMLElement;
          element.click();
        }
      }
}
