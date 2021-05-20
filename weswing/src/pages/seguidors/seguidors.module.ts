import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seguidors } from './seguidors';

@NgModule({
  declarations: [
    Seguidors,
  ],
  imports: [
    IonicPageModule.forChild(Seguidors),
  ],
  exports: [
    Seguidors
  ]
})
export class SeguidorsPage {}
