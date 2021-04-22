import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { GruposService } from '../../services/grupos.services';

/**
 * Generated class for the Creargrupo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-editusuari',
  templateUrl: 'editusuari.html',
})
export class EditUsuario {

  constructor(public navCtrl: NavController, public navParams: NavParams, private grupoServices: GruposService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Creargrupo');
  }

  
}