import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDosComponent } from './myFolder/to-dos/to-dos.component';
import { TodoItemComponent } from './myFolder/todo-item/todo-item.component';
import { HeaderComponent } from './myFolder/layout/header/header.component';
import { AddTodoComponent } from './myFolder/add-todo/add-todo.component';

@NgModule({
  declarations: [
    AppComponent,
    ToDosComponent,
    TodoItemComponent,
    HeaderComponent,
    AddTodoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
