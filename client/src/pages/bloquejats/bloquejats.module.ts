import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BloquejatsPage } from './bloquejats';

@NgModule({
  declarations: [
    BloquejatsPage,
  ],
  imports: [
    IonicPageModule.forChild(BloquejatsPage),
  ],
  exports: [
    BloquejatsPage
  ]
})
export class BloquejatsPageModule {}
