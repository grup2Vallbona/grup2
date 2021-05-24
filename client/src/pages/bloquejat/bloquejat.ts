import { Component, Input } from "@angular/core";

import { AlertController, IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Perfil } from "../perfil/perfil";
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the BloquejatPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-bloquejat",
  templateUrl: "bloquejat.html",
})
export class Bloquejat {
  @Input() bloquejat;
  usuari: Usuari;
  email:string;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dades: DadesProductesService,
   
    public global: GlobalProvider,
    public alertCtrl: AlertController
  ) {}

  ionViewWillEnter() {
    
  }
  desbloquearUsuario() {
    this.email = this.global.getEmail();
      this.dades.getUsuariEmail(this.email).subscribe((user) => {
        this.usuari = user.json();

        this.dades
          .deleteBloquejar(this.bloquejat.id, this.usuari.id)
          .subscribe((data) => {
            
          });
      });
  }

  presentConfirmDesbloquear() {
    let alert = this.alertCtrl.create({
      title: "¿Estas seguro que quieres desbloquear a este usuario?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            
          },
        },
        {
          text: "Aceptar",
          handler: () => {
            
            this.desbloquearUsuario();
          },
        },
      ],
    });
    alert.present();
  }
}
