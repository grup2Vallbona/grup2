import { Component, Input } from "@angular/core";
import { AlertController, IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { GlobalProvider } from "../../providers/global/global";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the SeguitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-seguit",
  templateUrl: "seguit.html",
})
export class Seguit {
  @Input() seguit;
  email: any;
  usuari: Usuari;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public global: GlobalProvider,
    public dades: DadesProductesService,
    public alertCtrl: AlertController
  ) {}

  ionViewDidLoad() {
  
  }
  dejarSeguir() {
    this.email = this.global.getEmail();
    alert(this.seguit.email);
    this.dades.getUsuariEmail(this.email).subscribe((user) => {
      this.usuari = user.json();
      this.dades
        .deleteSeguir(this.seguit.id, this.usuari.id)
        .subscribe((response) => {});
    });
  }

  presentConfirmDejarSeguir() {
    let alert = this.alertCtrl.create({
      title: "¿Quieres eliminar a " + this.seguit.nickname + "?",
      message: "WeSwing no avisará a " + this.seguit.nickname + " de que ya no forma parte de tus seguidos",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            
          },
        },
        {
          text: "Eliminar",
          handler: () => {
        
            this.dejarSeguir();
          },
        },
      ],
    });
    alert.present();
  }
}
