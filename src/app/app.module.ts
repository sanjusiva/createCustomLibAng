import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BtsCustomLibModule } from 'projects/bts-custom-lib/src/public-api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BtsCustomLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
