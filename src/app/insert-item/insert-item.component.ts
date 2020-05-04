import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../list-todo/todo-list.service';
import { DataService } from '../models/data-service.service';

@Component({
  selector: 'app-insert-item',
  templateUrl: './insert-item.component.html',
  styleUrls: ['./insert-item.component.scss']
})
export class InsertItemComponent implements OnInit {

  pageName: string;
  subpage: string;

  constructor(private todoListService:TodoListService, private dataService: DataService) { 
    this.pageName = localStorage.getItem("categorieName");
    this.subpage = `lista ${localStorage.getItem("listName")}`;
    this.dataService.activeRoute(`itens/${localStorage.getItem("listId")}`);
  }

  disabled = true;
  readonly textBtn = "insira item";
  newList: string;
  spinner = false;
  acitivePopUp = false;
  readonly textPostList = "Item inserido com sucesso!";

  postItem() {
    const item = {
      done: false,
      name: this.newList
    }
    this.spinner = true;
    this.todoListService.saveItem(localStorage.getItem("id1"), localStorage.getItem("listId"), item).subscribe(() => {
      this.spinner = false;
      this.acitivePopUp = true;
      this.newList= "";

      setInterval(() => {
         this.acitivePopUp = false;
      }, 2000);
    });
  }
  
  ngDoCheck() {
    const checkLengt = (str: string) : boolean => (str ? str.length >= 3 : false);
    const disabledButton = (param: boolean) => param ? false : true;
    this.disabled = disabledButton(checkLengt(this.newList)); 
  }

  ngOnInit() {}

}
