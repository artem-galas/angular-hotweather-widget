import {Component, Input} from '@angular/core';

@Component({
  selector: 'hw01-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor() { }

  @Input()
  public info: Object;
}
