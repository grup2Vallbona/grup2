import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController, NavParams } from "@ionic/angular";
import { Entitat } from "../../app/interfaces/ientitat";
import { Persona } from "../../app/interfaces/ipersona";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the SeguitsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-seguits",
  templateUrl: "seguits.html",
})
export class Seguits {
  
  usuarisSeguits = [];
  usuariRebut: Usuari;
  usuariSeguit: Usuari;
  id: any;
  nom: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage
  ) {
    this.usuariRebut = this.navParams.get("usuari");
  }

  ionViewWillEnter() {
    // this.storage.get("email").then((emailUser) => {
    this.dades
      .getUsuariEmail(this.usuariRebut.email)
      .subscribe((jUsuario: any) => {
        this.usuariSeguit = jUsuario.json();
        console.log(this.usuariSeguit);

        this.dades.getSeguits(this.usuariRebut.id).subscribe((seguit) => {
          this.usuarisSeguits = seguit.json();
        });
      });
  }
}
