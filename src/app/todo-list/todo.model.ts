

//待辦事項資料物件模型
export class Todo {

//事件名稱
private title = ""
//完成狀態
private complated = false;
//是否處於編輯狀態
private editMode = false;



//建構式-傳入title
constructor(title:string){
    this.title = title || '';
}

get done():boolean{
    return this.complated;
}

getTitle(): string{
    return this.title;
}
//切換完成狀態
toggleCompletion():void{
    this.complated = !this.complated;
}

get editing(): boolean{
    return this.editMode;
}

set editable(bl: boolean){
    this.editMode = bl;
}

setTitle(title: string):void{
    this.title = title;
}
}