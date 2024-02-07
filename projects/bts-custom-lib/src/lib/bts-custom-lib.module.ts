import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BtsCustomLibComponent } from './bts-custom-lib.component';



@NgModule({
  declarations: [
    BtsCustomLibComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    BtsCustomLibComponent
  ]
})
export class BtsCustomLibModule { }
