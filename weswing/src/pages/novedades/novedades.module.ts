import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Novedades } from './novedades';
import { Movidas } from '../movidas/movidas';
import { Perfil } from '../perfil/perfil';
import { Principal } from '../principal/principal';


@NgModule({
  declarations: [
    Novedades,
    
  ],
  imports: [
    IonicPageModule.forChild(Novedades),
  ],
  exports: [
    Novedades,
    
  ]
})
export class NovedadesModule {}
