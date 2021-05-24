import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuari } from '../../app/interfaces/iusuari';
import { DadesProductesService } from '../../services/dades-productes.service';

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
assistents = [];
usuari: Usuari;
assistentsArray = [];
comp : number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public dades: DadesProductesService) {
  }
  ionViewDidLoad() {
    this.dades.getAssistents().subscribe((assistentsJson) => {
      this.assistents = assistentsJson.json();
     
      for (let index in this.assistents) {
        this.dades
          .getUsuari(this.assistents[index].usuari_id)
          .subscribe((as) => {
            this.usuari = as.json();
            this.assistentsArray.push(this.usuari);

            // this.nom = this.usuariS.nickname;
          });
          this.comp += 1;
      }
    });
  }
  gotoAsistentes() {
     this.navCtrl.push(Asistentes);

  }

  gotoEscuela() {
     this.navCtrl.push(Escuela);

  }

}
