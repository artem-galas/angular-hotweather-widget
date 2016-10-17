import {Component, Output, EventEmitter, Input} from '@angular/core';
import { IRestoran } from  '../shared/interfaces/restoran.interface'

@Component({
  selector: 'hw01-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent {

  constructor() { }

  @Input()
  public  restoran: IRestoran;
  @Output()
  public selectedRestoran: EventEmitter<IRestoran> = new EventEmitter();

  public selectRestoran(restoran) {
    restoran.info.image = restoran.images[0].url;
    this.selectedRestoran.emit(restoran);
  }
}
