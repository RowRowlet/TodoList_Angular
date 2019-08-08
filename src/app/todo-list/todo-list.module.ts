import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//讓 TodoListComponent 被其他的 Module 使用，所以我們應該要將 TodoListComponent 也放進 TodoListModule 
import { TodoListComponent } from './todo-list.component'; 



@NgModule({
  declarations: [TodoListComponent],
  imports: [
    CommonModule
  ],
  exports:[TodoListComponent]
  
})
export class TodoListModule { }
