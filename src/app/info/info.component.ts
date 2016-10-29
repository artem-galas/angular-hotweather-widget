import {Component} from '@angular/core';
import {IInfo} from "../shared/interfaces/info.weather";
import {VillageService} from '../shared/services/village.service';
import {IRestoran} from "../shared/interfaces/restoran.interface";

@Component({
  selector: 'hw01-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {
  public info: IInfo;
  public image = 'assets/images/b1.jpg';

  constructor(private _villageService: VillageService) {
    _villageService.selectedRes.subscribe((res:IRestoran)=>{
      this.info = res.info;
    })
  }
}
