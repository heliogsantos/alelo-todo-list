import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { TodoListService } from '../../list-todo/todo-list.service';
import { DataService } from './../../models/data-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  pageName: string;

  constructor(
    private todoListService: TodoListService, 
    private route: ActivatedRoute,
    private dataService: DataService
  ) { 
    this.dataService.activeRoute(`lista/${this.getId()}`);
    this.pageName = localStorage.getItem("listName");
  }

  @Input() items: any;
  urlId: string;
  textBtn = "Adicionar item";
  subpage = "Itens";
  spinner = true;

  done(item: any) {
      this.spinner = true;
      this.todoListService.updateItem(this.getId(), this.urlId, item.id, this.checkDone(item)).subscribe(() => {
        this.spinner = false;
      });
  }

  getId(): string {
    return localStorage.getItem("id1");
  }

  empty = "Você não possui itens"

  checkDone(param): any {
    if(param.done) {
      param.done = false;
      return param;
    }else {
      param.done = true;
      return param;
    }
  }

  ngOnInit() {
    this.route.params.pipe(map(p => p.id)).subscribe(id => this.urlId = id);

    this.todoListService.getCategorieListItems(this.getId(), this.urlId).subscribe(item => {
      this.items = item;
      this.spinner = false;
    });
  }
}
