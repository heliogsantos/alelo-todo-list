import { NewTask } from './new-task';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TodoListService {

  constructor(private http: HttpClient) { }

  url = "https://5e1f3d7d39f7a80014a5a349.mockapi.io/api/v1/categories";

  // Headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getCategories(): Observable<NewTask> {
    return this.http.get<NewTask>(`${this.url}`);
  }

  getCategorieLists(id: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id}/lists`);
  }

  getCategorieListItems(id1: string, id2: string): Observable<any> {
    return this.http.get<any>(`${this.url}/${id1}/lists/${id2}/items`);
  }

  saveList(idCategorie: string, list: object): Observable<any> {
    return this.http.post<any>(`${this.url}/${idCategorie}/lists`, JSON.stringify(list), this.httpOptions);
  }

  updateItem(idCategorie: string, idList: string, idItem: string, item: object): Observable<any> {
    return this.http.put<any>(`${this.url}/${idCategorie}/lists/${idList}/items/${idItem}`, JSON.stringify(item), this.httpOptions);
  }
}
