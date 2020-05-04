import { Component, OnInit } from '@angular/core';

import { TodoListService } from '../list-todo/todo-list.service';
import { DataService } from '../models/data-service.service';

@Component({
  selector: 'app-insert-list',
  templateUrl: './insert-list.component.html',
  styleUrls: ['./insert-list.component.scss']
})
export class InsertlistComponent implements OnInit  {

  pageName: string;
  subpage: string;

  constructor(private todoListService: TodoListService, private dataService: DataService) {
    this.pageName = localStorage.getItem("categorieName");
    this.dataService.activeRoute(`lista/${localStorage.getItem("id1")}`);
  }

  spinner = false;
  acitivePopUp = false;
  readonly  textBtn = "insira lista";
  readonly textPostList = "Lista inserida com sucesso!";

  newList: string;
  disabled = true;

  postList() {
   const postList = {
      name: this.newList
    }
    this.spinner = true;
    this.todoListService.saveList(localStorage.getItem("id1"), postList).subscribe(() => {
      this.spinner = false;
      this.acitivePopUp = true;
      setInterval(() => {
        this.acitivePopUp = false;
        this.newList = "";
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
