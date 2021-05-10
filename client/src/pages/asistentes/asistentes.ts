import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Perfil } from "../perfil/perfil";

/**
 * Generated class for the Asistentes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-asistentes",
  templateUrl: "asistentes.html",
})
export class Asistentes {
  assistents = [];
  assistentsArray = [];
  usuari: Usuari;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dades: DadesProductesService
  ) {
    
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
      }
    });
  }
  gotoUsuario(email) {
    this.navCtrl.push(Assistentsperfil, { emailPassat: email });
  }
  seguirUsuari() {
    alert("hola");
  }
}
