import { Injectable } from '@angular/core';
import {Todo} from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoListService {

  private list : Todo[] = []

  constructor() { }

  //取得代辦事項清單
  getList():Todo[]{
    return this.list;
  }
  //新增待辦事項
  add(title: string):void {
    if (title || title.trim()){
      this.list.push(new Todo(title));
    }
  }
  //移除待辦事項
  remove(index: number):void{
    this.list.splice(index,1);
  }
  // 取得以完成/未完成清單
  getWithCompleted(completed: boolean): Todo[]{
    console.log(this.list);
    return this.list.filter(todo => todo.done === completed);
    
  }

  removeCompleted():void{
    this.list = this.getWithCompleted(false);
  }
}
