import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Principal } from './principal';

@NgModule({
  declarations: [
    Principal,
  ],
  imports: [
    IonicPageModule.forChild(Principal),
  ],
  exports: [
    Principal
  ]
})
export class PrincipalModule {}
