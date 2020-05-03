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

  constructor(
    private todoListService: TodoListService, 
    private route: ActivatedRoute,
    private dataService: DataService
  ) { 
    const id = localStorage.getItem("id1");
    this.dataService.activeRoute(`lista/${id}`);
  }

  @Input() items: any;
  urlId: string;
  pageName = "Itens";
  textBtn = "Adicionar item";

  ngOnInit() {
    const getId = () => localStorage.getItem("id1");
    
    this.route.params.pipe(map(p => p.id)).subscribe(id => this.urlId = id);

    this.todoListService.getCategorieListItems(getId(), this.urlId).subscribe(item => {
      this.items = item;
    });
  }
}
