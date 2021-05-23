import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seguits } from './seguits';
import { Seguit } from '../seguit/seguit'

@NgModule({
  declarations: [
    Seguits,
    Seguit
  ],
  imports: [
    IonicPageModule.forChild(Seguits),
  ],
  exports: [
    Seguits,
    Seguit
  ]
})
export class SeguitsModule {}
