import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bloquejat } from '../bloquejat/bloquejat';
import { Bloquejats } from './bloquejats';

@NgModule({
  declarations: [
    Bloquejats,
    Bloquejat
  ],
  imports: [
    IonicPageModule.forChild(Bloquejats),
  ],
  exports: [
    Bloquejats,
    Bloquejat
  ]
})
export class BloquejatsModule {}
