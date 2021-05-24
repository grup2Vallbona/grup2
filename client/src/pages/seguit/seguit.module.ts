import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seguit } from './seguit';

@NgModule({
  declarations: [
    Seguit,
  ],
  imports: [
    IonicPageModule.forChild(Seguit),
  ],
  exports: [
    Seguit
  ]
})
export class SeguitModule {}
