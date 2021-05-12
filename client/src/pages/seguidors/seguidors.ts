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

  seguidor = [];
  lal = [];
  usuariSeguidor: Usuari;

  usuariSeguit: Usuari;
  id: any;
  nom: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage
  ) {
    this.usuariSeguidor = this.navParams.get("usuari");
  }

  


  ionViewWillEnter() {

      this.dades.getUsuariEmail(this.usuariSeguidor.email).subscribe((jUsuario: any) => {
        this.usuariSeguit = jUsuario.json();

        this.dades.getSeguidors(this.usuariSeguit.id).subscribe((seguidor) => {
          this.seguidor = seguidor.json();
          
          for (let index in this.seguidor) {
           
            
            this.dades
              .getUsuari(this.seguidor[index].seguidor_id)
              .subscribe((as) => {
                this.usuariSeguit = as.json();
                this.lal.push(this.usuariSeguit);
                // this.nom = this.usuariS.nickname;
              });
          }
        });
      });
    
  }
}
