import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seguidor } from './seguidor';

@NgModule({
  declarations: [
    Seguidor,
  ],
  imports: [
    IonicPageModule.forChild(Seguidor),
  ],
  exports: [
    Seguidor
  ]
})
export class SeguidorModule {}
