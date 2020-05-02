import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import * as moment from 'moment';
moment.locale('pt');

@Component({
  selector: 'app-date',
  templateUrl: './date.component.html',
  styleUrls: ['./date.component.scss']
})
export class DateComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  dayNumber: string = moment().format('Do').slice(0, 2);
  month: string = moment().format('MMMM');
  year: string = moment().format('YYYY');

  formateDay(): string {
    if(this.dayNumber.length === 2) {
      return this.dayNumber = moment().format('Do').slice(0, 1);
    }
    return this.dayNumber;
  }
  
  ngOnInit() {}
}
