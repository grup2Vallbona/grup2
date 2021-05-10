import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Perfil } from "../perfil/perfil";
import { Asistente } from "../asistente"
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

  assistentsArray = [];
  usuari: Usuari;
  asistentes =[];
  evento;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dades: DadesProductesService
  ) {
    this.evento = navParams.get("evento");
  }

  ionViewWillEnter() {
    this.dades.getAssistents().subscribe((assistentsJson) => {
      this.asistentes = assistentsJson.json();
    });
  }
  // gotoUsuario(email) {
  //   this.navCtrl.push(Assistentsperfil, { emailPassat: email });
  // }
  seguirUsuari() {
    // alert("hola");
  }
}
