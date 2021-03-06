import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Usuari } from '../../app/interfaces/iusuari';
import { DadesProductesService } from '../../services/dades-productes.service';

/**
 * Generated class for the SeguidorsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-seguidors',
  templateUrl: 'seguidors.html',
})
export class Seguidors {

  
  usuarisSeguidors = [];
  usuariRebut: Usuari;

  usuariSeguit: Usuari;
  id: any;
  nom: any;
email: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    
  ) {
    this.email = this.navParams.get("email");
  }

  


  ionViewWillEnter() {

      this.dades.getUsuariEmail(this.email).subscribe((jUsuario: any) => {
        this.usuariSeguit = jUsuario.json();

        this.dades.getSeguidors(this.usuariSeguit.id).subscribe((seguidor) => {
          this.usuarisSeguidors = seguidor.json();
     
        });
      });
    
  }
}
