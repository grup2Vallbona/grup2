import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuari } from '../../app/interfaces/iusuari';
import { DadesProductesService } from '../../services/dades-productes.service';



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
  usuari: Usuari;
id: number;
  constructor(private dades: DadesProductesService, public navCtrl: NavController, public navParams: NavParams, private grupoServices: GruposService) {
    this.id = navParams.get("idUsuari");
    
  }

  
  ionViewDidLoad() {
      this.dades.getDades(this.id).subscribe(user => {
        this.usuari = user.json();
       
      })
    
  }

  
}