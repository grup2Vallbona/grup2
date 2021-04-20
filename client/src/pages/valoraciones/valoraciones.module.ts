import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Valoraciones } from './valoraciones';

@NgModule({
  declarations: [
    Valoraciones,
  ],
  imports: [
    IonicPageModule.forChild(Valoraciones),
  ],
  exports: [
    Valoraciones
  ]
})
export class ValoracionesModule {}
