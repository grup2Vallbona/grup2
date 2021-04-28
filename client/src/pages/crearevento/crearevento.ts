import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadesProductesService } from "../../services/dades-productes.service";
import { Storage } from "@ionic/storage";
import { Usuari } from "../../app/interfaces/iusuari";
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
  eventsUsuari=[];
  usuari: Usuari;
  personaid: number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dades: DadesProductesService,private storage: Storage) {
   
  }
  carregarEvents(){
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.personaid = this.usuari.persona_id;
        this.dades.getPremisUsuari(this.personaid).subscribe((events: any) => {
          var event = events.json();
          for (let index = 0; index < event.length; index++) {
            this.eventsUsuari[index]=event[index].titol;
          }
        });
      });
    });
   
  }
  carregarBalls(){
    this.dades.getTipusBalls().subscribe((tipusBalls: any) => {
      var event = tipusBalls.json();
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
