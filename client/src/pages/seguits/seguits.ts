import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
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
  email: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
   
  ) {
    this.email = this.navParams.get("email");
  }

  ionViewWillEnter() {
    // this.storage.get("email").then((emailUser) => { 
    this.dades
      .getUsuariEmail(this.email)
      .subscribe((jUsuario: any) => { 
        this.usuariSeguit = jUsuario.json();
   

        this.dades.getSeguits(this.usuariSeguit.id).subscribe((seguit) => {
          this.usuarisSeguits = seguit.json();
        });
      });
  }
}
