import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seguits } from './seguits';

@NgModule({
  declarations: [
    Seguits,
  ],
  imports: [
    IonicPageModule.forChild(Seguits),
  ],
  exports: [
    Seguits
  ]
})
export class SeguitsModule {}
