import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Asistentes } from './asistentes';
import { Perfil } from '../perfil/perfil';

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
