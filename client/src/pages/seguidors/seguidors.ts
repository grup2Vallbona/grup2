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

  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage
  ) {}

  seguidor = [];
  lal = [];
  usuari: Usuari;

  usuariS: Usuari;
  id: any;
  nom: any;


  ionViewWillEnter() {
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();

        this.dades.getSeguidors(this.usuari.id).subscribe((seguidor) => {
          this.seguidor = seguidor.json();
          
          for (let index in this.seguidor) {
           
            
            this.dades
              .getUsuari(this.seguidor[index].seguidor_id)
              .subscribe((as) => {
                this.usuari = as.json();
                this.lal.push(this.usuari);
                // this.nom = this.usuariS.nickname;
              });
          }
        });
      });
    });
  }
}
