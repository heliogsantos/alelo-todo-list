import { Component, OnInit, Input } from '@angular/core';

import { NewTask } from './new-task';
import { TodoListService } from './todo-list.service';
import { DataService } from './../models/data-service.service';

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.scss']
})
export class ListTodoComponent implements OnInit {

  constructor(private todoListService: TodoListService, private dataService: DataService) { }

  todos: NewTask;
  textSearch: string;
  removeCard: boolean = false;
  @Input() deleteCard;
  @Input() spinner = true;
  pageName = "Categorias";

  private listTodos() {
    this.todoListService.getCategories().subscribe((todo: NewTask) => {
      this.todos = todo;
      this.spinner = false;
    });
  }

  ngOnInit() {
    this.listTodos();
    this.dataService.activeRoute('home');
  }
}
