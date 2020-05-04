import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor() { }

  @Input() text: string;
  @Input() activePopUp = false;

  ngOnInit() {
  }

}
