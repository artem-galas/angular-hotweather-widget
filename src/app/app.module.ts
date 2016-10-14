import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { InfoComponent } from './info/info.component';
import { VillageComponent } from './village/village.component';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    WeatherWidgetComponent,
    InfoComponent,
    VillageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
