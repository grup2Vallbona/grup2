import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Assistentsperfil } from './assistentsperfil';

@NgModule({
  declarations: [
    Assistentsperfil,
  ],
  imports: [
    IonicPageModule.forChild(Assistentsperfil),
  ],
  exports: [
    Assistentsperfil
  ]
})
export class AssistentsperfilModule {}
