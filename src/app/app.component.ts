import { Component } from '@angular/core';
import {ElementLeftComponent} from './element-left/element-left.component'
import {WeatherWidgetComponent} from './weather-widget/weather-widget.component'
import {InfoComponent} from './info/info.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
