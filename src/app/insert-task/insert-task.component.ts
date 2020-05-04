import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { TodoListService } from './../list-todo/todo-list.service';
import { DataService } from './../models/data-service.service';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.scss']
})
export class InsertTaskComponent implements OnInit  {

  pageName: string;
  subpage: string;

  constructor(private todoListService: TodoListService, private router: Router, private dataService: DataService) {
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
        this.navegationList();
      }, 1000);
    });
  }

  navegationList() {
    this.router.navigate([`lista/${localStorage.getItem("id1")}`]);
  }

  ngDoCheck() {
    const checkLengt = (str: string) : boolean => (str ? str.length >= 3 : false);
    const disabledButton = (param: boolean) => param ? false : true;
    this.disabled = disabledButton(checkLengt(this.newList)); 
  }

  ngOnInit() {}

}
