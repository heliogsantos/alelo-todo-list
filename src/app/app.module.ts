import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule  } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component'
import { DateComponent } from './header/date/date.component';
import { ListTodoComponent } from './list-todo/list-todo.component';
import { CardComponent } from './list-todo/card/card.component';
import { TodoListService } from '././list-todo/todo-list.service';
import { LoaderComponent } from './loader/loader.component';
import { ListComponent } from './list/list.component';
import { ItemsComponent } from './list/items/items.component';
import { PageNameComponent } from './header/page-name/page-name.component';
import { ComeBackComponent } from './header/come-back/come-back.component';
import { ButtonTaskComponent } from './button-task/button-task.component';
import { EmptyComponent } from './empty/empty.component';
import { InsertTaskComponent } from './insert-task/insert-task.component';
import { PopUpComponent } from './pop-up/pop-up.component';
import { InsertItemComponent } from './insert-item/insert-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DateComponent,
    ListTodoComponent,
    CardComponent,
    LoaderComponent,
    ListComponent,
    ItemsComponent,
    PageNameComponent,
    ComeBackComponent,
    ButtonTaskComponent,
    EmptyComponent,
    InsertTaskComponent,
    PopUpComponent,
    InsertItemComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})
export class AppModule { }
