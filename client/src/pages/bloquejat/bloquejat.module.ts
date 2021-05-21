import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bloquejat } from './bloquejat';

@NgModule({
  declarations: [
    Bloquejat,
  ],
  imports: [
    IonicPageModule.forChild(Bloquejat),
  ],
  exports: [
    Bloquejat
  ]
})
export class BloquejatModule {}
