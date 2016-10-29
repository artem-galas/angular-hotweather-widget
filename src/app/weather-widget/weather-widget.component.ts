import {Component} from '@angular/core';
import {IWeather} from "../shared/interfaces/weather.interface";
import {VillageService} from "../shared/services/village.service";
import {IRestoran} from "../shared/interfaces/restoran.interface";

@Component({
  selector: 'hw01-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  public weather: IWeather;
  constructor(private _villageService: VillageService) {
    _villageService.selectedRes.subscribe((res:IRestoran)=>{
      this.weather = res.weather;
    })
  }
}
