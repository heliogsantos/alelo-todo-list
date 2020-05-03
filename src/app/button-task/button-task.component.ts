import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-button-task',
  templateUrl: './button-task.component.html',
  styleUrls: ['./button-task.component.scss']
})
export class ButtonTaskComponent implements OnInit {

  constructor() { }

  @Input() text: string;

  ngOnInit() {
  }

}
