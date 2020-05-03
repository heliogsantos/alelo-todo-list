import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { TodoListService } from './../list-todo/todo-list.service';

@Component({
  selector: 'app-insert-task',
  templateUrl: './insert-task.component.html',
  styleUrls: ['./insert-task.component.scss']
})
export class InsertTaskComponent implements OnInit  {

  pageName: string;

  constructor(private todoListService: TodoListService, private router: Router) {
    this.pageName = localStorage.getItem("categorieName");
  }

  spinner = false;
  readonly  textBtn = "inserir";

  newList: string;
  disabled = true;

  postList() {
   const postList = {
      name: this.newList
    }
    this.spinner = true;
    this.todoListService.saveList(localStorage.getItem("id1"), postList).subscribe(() => {
      this.spinner = false;
      this.navegationList();
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
