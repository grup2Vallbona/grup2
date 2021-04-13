import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Novedades } from './novedades';
import { Movidas } from '../movidas/movidas';
import { Usuario } from '../usuario/usuario';


@NgModule({
  declarations: [
    Novedades,
  ],
  imports: [
    IonicPageModule.forChild(Novedades),
  ],
  exports: [
    Novedades
  ]
})
export class NovedadesModule {}
