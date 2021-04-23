import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Perfil } from '../perfil/perfil';

/**
 * Generated class for the Asistentes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-asistentes',
  templateUrl: 'asistentes.html',
})
export class Asistentes {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoUsuario() {
     this.navCtrl.push(Perfil);

  }

}
