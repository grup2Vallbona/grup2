import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditUsuario } from './editusuario';

@NgModule({
  declarations: [
    EditUsuario,
  ],
  imports: [
    IonicPageModule.forChild(EditUsuario),
  ],
  exports: [
    EditUsuario
  ]
})
export class EditusuarioModule {}
