import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
/**
 * Generated class for the RecuperarContraComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'recuperar-contra',
  templateUrl: 'recuperar-contra.html'
})
export class RecuperarContra {

  text: string;
  email:string;
  constructor( public navCtrl: NavController, public navParams: NavParams,public afAuth: AngularFireAuth,public alertCtrl:AlertController) {
    console.log('Hello RecuperarContraComponent Component');
    this.text = 'Hello World';
  }
  inicio(){
    this.navCtrl.push(HomePage);
  }
  recuperar(){
    try{
      this.afAuth.auth.sendPasswordResetEmail(this.email);
      let alert = this.alertCtrl.create({
        title: 'Se ha enviado un correo para recuperar la contraseña',
  
        buttons: ['Aceptar']
      });
      alert.present();
      this.navCtrl.push(HomePage);
    }
    catch(error){
      console.log(error);
    }
  }
}
