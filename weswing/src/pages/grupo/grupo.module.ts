import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Grupo } from './grupo';

@NgModule({
  declarations: [
    Grupo,
  ],
  imports: [
    IonicPageModule.forChild(Grupo),
  ],
  exports: [
    Grupo
  ]
})
export class GrupoModule {}
