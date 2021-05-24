import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Foro } from './foro';

import { Grupo } from '../grupo/grupo';

@NgModule({
  declarations: [
    Foro,
  ],
  imports: [
    IonicPageModule.forChild(Foro),
  ],
  exports: [
    Foro
  ]
})
export class ForoModule {}
