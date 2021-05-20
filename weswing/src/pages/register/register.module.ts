import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Register } from './register';
// import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    Register,
  ],
  imports: [
    IonicPageModule.forChild(Register),
  ],
  exports: [
    Register
  ]
})
export class RegisterModule {}
