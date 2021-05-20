import { Component } from '@angular/core';
import { NavController, NavParams } from "@ionic/angular";

/**
 * Generated class for the Escuela page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-escuela',
  templateUrl: 'escuela.html',
})
export class Escuela {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Escuela');
  }

}
