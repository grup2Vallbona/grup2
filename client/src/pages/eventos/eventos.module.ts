import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Eventos } from './eventos';

import { Movidas } from '../movidas/movidas';


@NgModule({
  declarations: [
    Eventos,
  ],
  imports: [
    IonicPageModule.forChild(Eventos),
  ],
  exports: [
    Eventos
  ]
})
export class EventosModule {}
