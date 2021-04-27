import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the Crearevento page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crearevento',
  templateUrl: 'crearevento.html',
})
export class Crearevento {
  nuevoEvento:boolean;
  tipusBalls=[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private dades: DadesProductesService) {
   
  }
  carregarBalls(){
    this.dades.getTipusBalls().subscribe((tipusBalls: any) => {
      var event = tipusBalls.json();
      console.log(event);
      for (let index = 0; index < event.length; index++) {
        this.tipusBalls[index]=event[index].nom;
        console.log(event[index].nom);
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Crearevento');
    this.carregarBalls();
  }
  

}
