import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Seguidors } from './seguidors';
import {Seguidor} from '../seguidor/seguidor'
@NgModule({
  declarations: [
    Seguidors,
    Seguidor
  ],
  imports: [
    IonicPageModule.forChild(Seguidors),
  ],
  exports: [
    Seguidors,
    Seguidor
  ]
})
export class SeguidorsPage {}
