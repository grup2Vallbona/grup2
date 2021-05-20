import { Component } from '@angular/core';
import { NavController, NavParams } from "@ionic/angular";

/**
 * Generated class for the Grupo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-grupo',
  templateUrl: 'grupo.html',
})
export class Grupo {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Grupo');
  }

}
