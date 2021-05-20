import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Perfil } from "../perfil/perfil";
import { Asistente } from "../asistente/asistente";
import { THIS_EXPR } from "@angular/compiler/src/output/output_ast";
import { Storage } from "@ionic/storage";
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
  asistentes = [];
  generic: string = "todos";
  evento;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public dades: DadesProductesService,
    public storage: Storage
  ) {
    this.evento = navParams.get("evento");
  }

  ionViewWillEnter() {
    this.storage.get("email").then(email => {
      console.log(email)
    })
    this.dades.getAssistentsId(this.evento.id).subscribe((assistentsJson) => {
      this.asistentes = assistentsJson.json();
      
      
    });
  }
 
}
