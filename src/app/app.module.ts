import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
const appRoutes: Routes=[
  {path:'',component:HomeComponent},
  {path:'addTodo',component:AddTodoListComponent},
  {path:'viewTodo',component:TodoListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    AddTodoListComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
