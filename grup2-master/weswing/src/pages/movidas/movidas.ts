import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Asistentes } from '../asistentes/asistentes';
import { Escuela } from '../escuela/escuela';

/**
 * Generated class for the Movidas page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-movidas',
  templateUrl: 'movidas.html',
})
export class Movidas {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoAsistentes() {
     this.navCtrl.push(Asistentes);

  }

  gotoEscuela() {
     this.navCtrl.push(Escuela);

  }

}
