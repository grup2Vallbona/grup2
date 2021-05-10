import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Assistentsperfil } from '../assistentsperfil/assistentsperfil';

/**
 * Generated class for the AsistentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-asistente',
  templateUrl: 'asistente.html',
})
export class Asistente {
@Input() asistente;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoUsuario(email) {
    this.navCtrl.push(Assistentsperfil, { asistente: this.asistente });
  }

}
