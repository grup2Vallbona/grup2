import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Movidas } from '../movidas/movidas';
import { Perfil } from '../perfil/perfil';


/**
 * Generated class for the Novedades page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-novedades',
  templateUrl: 'novedades.html',
})
export class Novedades {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  gotoMovidas() {
     this.navCtrl.push(Movidas);

  }


  gotoPerfil() {
     this.navCtrl.push(Perfil);

  }

}
