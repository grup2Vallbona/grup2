import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Asistentes } from './asistentes';
import { Usuario } from '../usuario/usuario';

@NgModule({
  declarations: [
    Asistentes,
  ],
  imports: [
    IonicPageModule.forChild(Asistentes),
  ],
  exports: [
    Asistentes
  ]
})
export class AsistentesModule {}
