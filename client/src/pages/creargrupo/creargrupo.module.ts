import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Creargrupo } from './creargrupo';

@NgModule({
  declarations: [
    Creargrupo,
  ],
  imports: [
    IonicPageModule.forChild(Creargrupo),
  ],
  exports: [
    Creargrupo
  ]
})
export class CreargrupoModule {}
