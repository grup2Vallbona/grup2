import { Component, Input } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Perfil } from "../perfil/perfil";

/**
 * Generated class for the AsistentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: "page-asistente",
  templateUrl: "asistente.html",
})
export class Asistente {
  @Input() asistente;
  email: any;
  constructor(
    public navCtrl: NavController,
    public dades: DadesProductesService,
    public navParams: NavParams,
    public storage: Storage
  ) {}

  gotoUsuario() {
    
    this.storage.get("email").then(emailUser => {
      this.email = emailUser;
      console.log(this.email);
      console.log(this.asistente.email);
      console.log(this.email == this.asistente.email);
      if (this.email == this.asistente.email) {
        this.navCtrl.push(Perfil);
      } else {
        this.navCtrl.push(Assistentsperfil, { asistente: this.asistente });
      }
    });
   
   
  }
}
