import { Component, OnInit, Input } from '@angular/core';

import { NewTask } from '../new-task';
import { TodoListService } from '../todo-list.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  constructor() { }

  @Input() todo;

  checkKey(todo) {
    return Object.keys(todo).length;
  }

  ngOnInit() {}
}
