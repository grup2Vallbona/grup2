import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Eventos } from './eventos';
import { Evento } from '../evento/evento';
import { Movidas } from '../movidas/movidas';


@NgModule({
  declarations: [
    Eventos,
    Evento
  ],
  imports: [
    IonicPageModule.forChild(Eventos),
  ],
  exports: [
    Eventos,
    Evento
  ]
})
export class EventosModule {}
