import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Bloquejats } from './bloquejats';

@NgModule({
  declarations: [
    Bloquejats,
  ],
  imports: [
    IonicPageModule.forChild(Bloquejats),
  ],
  exports: [
    Bloquejats
  ]
})
export class BloquejatsModule {}
