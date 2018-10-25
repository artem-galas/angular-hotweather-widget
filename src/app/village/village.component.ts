import { Component, Input, OnInit } from '@angular/core';
import { IRestoran } from '../shared/interfaces';

@Component({
  selector: 'app-village',
  templateUrl: './village.component.html',
  styleUrls: ['./village.component.css']
})
export class VillageComponent implements OnInit {
  @Input()
  public restoran: IRestoran;
  constructor() { }

  ngOnInit() {
  }

}
