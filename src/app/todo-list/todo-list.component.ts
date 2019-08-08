import { Component, OnInit } from '@angular/core';
import { TodoListService } from './todo-list.service';
import { Todo } from './todo.model';

import { TodoStatusType } from './todo-status-type.enum';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

    
  todoStatusType = TodoStatusType;  // 待辦事項狀態的列舉
  private status = TodoStatusType.All;// 目前狀態

  constructor(
    private TodoListService: TodoListService,

  ) { }

  ngOnInit() {  //生命週期的每個時刻動作的lifecycle hooks?
  }

  /*inputRef-在Template使用$event.target取到的當前觸發事件的元素實體
    HTMLInputElement-inputRef的資料類型*/
  addTodo(inputRef: HTMLInputElement): void {
    console.log(inputRef.value);
    const todo = inputRef.value.trim();
    if (todo) {
      this.TodoListService.add(todo)
      inputRef.value = '';
    }
  }

  getList(): Todo[] {

    let list: Todo[] = [];
  
    switch (this.status) {
  
      case TodoStatusType.Active:
        list = this.getRemainingList();
        break;
  
      case TodoStatusType.Completed:
        list = this.getCompletedList();
        break;
  
      default:
        list = this.TodoListService.getList();
        break;
  
    }
  
    return list;
  
  }

  remove(index: number): void {
    this.TodoListService.remove(index);
  }

  edit(todo: Todo): void {
    todo.editable = true;
  }
  update(todo: Todo, newTitle: string): void {
    const title = newTitle.trim();
    if (title) {
      todo.setTitle(title);
      todo.editable = false;
    } else {
      const index = this.getList().indexOf(todo);
      if (index !== 1) {
        this.remove(index);
      }
    }
  }

  cancelEditing(todo: Todo): void {
    todo.editable = false;
  }

  getRemainingList(): Todo[] {
    return this.TodoListService.getWithCompleted(false);
  }

  getCompletedList(): Todo[] {
    return this.TodoListService.getWithCompleted(true);
  }

  setStatus(status: number): void {
    this.status = status;
  }

  checkStatus(status: number): boolean {
    return this.status === status;
  }

  removeCompleted():void{
    this.TodoListService.removeCompleted();
  }

}
