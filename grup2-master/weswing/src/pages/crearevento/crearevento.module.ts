import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Crearevento } from './crearevento';

@NgModule({
  declarations: [
    Crearevento,
  ],
  imports: [
    IonicPageModule.forChild(Crearevento),
  ],
  exports: [
    Crearevento
  ]
})
export class CreareventoModule {}
