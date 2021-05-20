import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Asistentes } from './asistentes';
import { Asistente } from '../asistente/asistente';
import { Perfil } from '../perfil/perfil';

@NgModule({
  declarations: [
    Asistentes,
    Asistente
  ],
  imports: [
    IonicPageModule.forChild(Asistentes),
  ],
  exports: [
    Asistentes,
    Asistente
  ]
})
export class AsistentesModule {}
