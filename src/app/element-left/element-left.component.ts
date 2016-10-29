import {Component} from '@angular/core';
import {VillageComponent} from '../village/village.component'
import {IRestoran} from "../shared/interfaces/restoran.interface";
import {VillageService} from '../shared/services/village.service'

@Component({
  selector: 'hw01-element-left',
  templateUrl: './element-left.component.html',
  styleUrls: ['./element-left.component.css']
})
export class ElementLeftComponent {

  public restaurants: IRestoran[]=[];

  constructor(private _villageService: VillageService) {
    _villageService.restaurants.subscribe((res:IRestoran)=> {
      this.restaurants.push(res);
    });
  }

  public imageHeader = 'assets/images/1.jpg';
  public filter: string = 'all';

  public selected(res:IRestoran) {
    if (res.images[1].url) {
      this.imageHeader = res.images[1].url;
    }
    this._villageService.selectRestaurant(res)
  }

}
