import {Component, Output, EventEmitter} from '@angular/core';
import {VillageComponent} from '../village/village.component'

@Component({
  selector: 'hw01-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  constructor() { }
  public imageHeader = 'assets/images/1.jpg';

  @Output()
  public restoran: EventEmitter<Object> = new EventEmitter();

  public selected(res) {
    if (res.images[1].url) {
      this.imageHeader = res.images[1].url;
    }
    this.restoran.emit(res);
    console.log(res);
  }
}
