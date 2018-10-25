import { Component, OnInit } from '@angular/core';
import { IInfoWeather, IRestoran } from '../shared/interfaces';
import { VillageService } from '../shared/services/village.service';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent {

  public info: IInfoWeather;
  public image = 'assets/images/b1.jpg';

  constructor(private _villageService: VillageService) {
    _villageService.selectedRes.subscribe((res: IRestoran) => {
      this.info = res.info;
    });
  }

}
