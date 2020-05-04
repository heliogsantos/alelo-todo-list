import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { TodoListService } from './../list-todo/todo-list.service';
import { DataService } from './../models/data-service.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

   pageName = "";

  constructor(
    private todoListService: TodoListService, 
    private route: ActivatedRoute,
    private dataService: DataService
  ) { 
    this.dataService.activeRoute("");
    this.pageName = localStorage.getItem("categorieName");
  }

  @Input() list: any;
  urlId: string;
  categorieList: any;
  readonly textBtn = "Adicionar lista";
  readonly subpage = "Listas";
  readonly empty = "Sua lista está vazia";
  spinner = true;

  saveListName(name: string, id: string) {
    localStorage.setItem("listName", name);
    localStorage.setItem("listId", id);
  }

  ngOnInit() {
    this.route.params.pipe(map(p => p.id)).subscribe(id => {
      this.urlId = id;
      localStorage.setItem("id1", id);
    });

    this.todoListService.getCategorieLists(this.urlId).subscribe(list => {
      this.categorieList = list;
      this.spinner = false;
    });
  }
}
