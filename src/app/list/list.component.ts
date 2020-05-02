import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { TodoListService } from './../list-todo/todo-list.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(private todoListService: TodoListService, private route: ActivatedRoute) { }

  @Input() list: any;
  urlId: string;
  catepriesList: any;
  pageName = "Listas"

  ngOnInit() {
    this.route.params.pipe(map(p => p.id)).subscribe(id => {
      this.urlId = id;
      localStorage.setItem("id1", id);
    });

    this.todoListService.getCategorieLists(this.urlId).subscribe(list => {
      this.catepriesList = list;
    });
  }
}
