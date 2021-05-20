import { Component, Input } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Perfil } from "../perfil/perfil";

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dades: DadesProductesService,
    public storage: Storage
  ) {}

  ionViewWillEnter() {
    console.log(this.bloquejat);
  }
  desbloquearUsuario() {
    this.storage.get("email").then((email) => {
      this.dades.getUsuariEmail(email).subscribe((user) => {
        this.usuari = user.json();

        this.dades
          .deleteBloquejar(this.bloquejat.id, this.usuari.id)
          .subscribe((data) => {
            
          });
      });
    });
  }
}
