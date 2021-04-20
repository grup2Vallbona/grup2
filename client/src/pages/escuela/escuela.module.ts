import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Escuela } from './escuela';

@NgModule({
  declarations: [
    Escuela,
  ],
  imports: [
    IonicPageModule.forChild(Escuela),
  ],
  exports: [
    Escuela
  ]
})
export class EscuelaModule {}
