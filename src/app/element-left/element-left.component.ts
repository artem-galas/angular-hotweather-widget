import { Component, OnInit } from '@angular/core';
import { VillageService } from '../shared/services/village.service';
import { IRestoran } from '../shared/interfaces';

@Component({
  selector: 'app-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  public restaurants: IRestoran[] = [];
  public imageHeader = 'assets/images/1.jpg';
  public filter = 'all';

  constructor(private _villageService: VillageService) {
    _villageService.restaurants.subscribe((res: IRestoran) => {
      this.restaurants.push(res);
    });
  }

  public selected(res: IRestoran) {
    if (res.images[1].url) {
      this.imageHeader = res.images[1].url;
    }
    this._villageService.selectRestaurant(res);
  }

}
