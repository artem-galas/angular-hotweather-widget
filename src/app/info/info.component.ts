import {Component, Input} from '@angular/core';
import {IInfo} from "../shared/interfaces/info.weather";

@Component({
  selector: 'hw01-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  constructor() { }

  public image = 'assets/images/b1.jpg';

  @Input()
  public info: IInfo
}
