import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListTodoComponent } from './list-todo/list-todo.component';
import { ListComponent } from './list/list.component';
import { ItemsComponent } from './list/items/items.component';
import { InsertlistComponent } from './insert-list/insert-list.component';
import { InsertItemComponent } from './insert-item/insert-item.component';

export const routes: Routes = [
  { path: '', component:  ListTodoComponent },
  { path: 'lista/:id', component: ListComponent },
  { path: 'itens/:id', component: ItemsComponent },
  { path: 'inserir', component: InsertlistComponent },
  { path: 'inserir/item', component: InsertItemComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
