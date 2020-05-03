import { Component, OnInit } from '@angular/core';

import { DataService } from './../../models/data-service.service';

@Component({
  selector: 'app-come-back',
  templateUrl: './come-back.component.html',
  styleUrls: ['./come-back.component.scss']
})
export class ComeBackComponent implements OnInit {

  constructor(private dataService: DataService) { }
  router: string;

  ngOnInit() {
    this.dataService.backRoute.subscribe(route => this.router = route);
  }
}
