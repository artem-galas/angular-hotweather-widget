import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ElementLeftComponent } from './element-left/element-left.component';
import { InfoComponent } from './info/info.component';
import { VillageComponent } from './village/village.component';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { TypePipe } from './shared/pipes/type.pipe';
import { VillageService } from './shared/services/village.service';

@NgModule({
  declarations: [
    AppComponent,
    ElementLeftComponent,
    InfoComponent,
    VillageComponent,
    WeatherWidgetComponent,
    TypePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [
    VillageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
