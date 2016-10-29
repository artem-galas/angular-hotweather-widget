import {Component,Input} from '@angular/core';
import { IRestoran } from  '../shared/interfaces/restoran.interface'
import {VillageService} from '../shared/services/village.service'

@Component({
  selector: 'hw01-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent {

  constructor() { }

  @Input()
  public  restoran: IRestoran;
}
