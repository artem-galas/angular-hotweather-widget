import {Component, Input} from '@angular/core';

@Component({
  selector: 'hw01-weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.css']
})
export class WeatherWidgetComponent {

  constructor() { }

  @Input()
  public weather:Object

}
