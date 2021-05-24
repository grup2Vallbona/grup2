import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Movidas } from './movidas';
import { Asistentes } from '../asistentes/asistentes';
import { Escuela } from '../escuela/escuela';

@NgModule({
  declarations: [
    Movidas,
  ],
  imports: [
    IonicPageModule.forChild(Movidas),
  ],
  exports: [
    Movidas
  ]
})
export class MovidasModule {}
