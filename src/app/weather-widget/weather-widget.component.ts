import { Component, OnInit } from '@angular/core';
import { IRestoran, IWeather } from '../shared/interfaces';
import { VillageService } from '../shared/services/village.service';

@Component({
  selector: 'app-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  public weather: IWeather;
  constructor(private _villageService: VillageService) {
    _villageService.selectedRes.subscribe((res: IRestoran) => {
      this.weather = res.weather;
    });
  }

}
