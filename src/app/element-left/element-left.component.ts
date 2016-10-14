import { Component } from '@angular/core';
import {VillageComponent} from '../village/village.component'

@Component({
  selector: 'hw01-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  constructor() { }

  public row:any;
  public imageHeader = 'assets/images/1.jpg';

  public selected(e) {
    console.info(e);
    if (e.images[1].url) {
      this.imageHeader = e.images[1].url;
    }
  }
}
