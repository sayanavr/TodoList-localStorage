import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { NgxSocialShareModule } from 'ngx-social-share';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { AddTodoListComponent } from './add-todo-list/add-todo-list.component';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

import {DataService} from './services/data.service'
import { from } from 'rxjs';
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
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    NgxSocialShareModule
  ],
  providers: [AppComponent,
              DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
