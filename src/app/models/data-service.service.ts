import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  backRoute = new EventEmitter<string>();

  activeRoute(url: string) {
    this.backRoute.emit(url);
  }
}
