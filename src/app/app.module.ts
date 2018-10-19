import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';
import { AdsbService } from './adsb.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBo-9BynNEwOdqgyksC0ku7Fzuwc_AHlZ4'
    })
  ],
  providers: [ AppComponent, AdsbService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
