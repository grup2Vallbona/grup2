import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

import { Movidas } from "../movidas/movidas";
import { Perfil } from "../perfil/perfil";
import { GlobalProvider } from "../../providers/global/global";

/**
 * Generated class for the Novedades page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-novedades",
  templateUrl: "novedades.html",
})
export class Novedades {
  usuari: Usuari;
  email:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public dades: DadesProductesService,
    public global: GlobalProvider
  ) {}

  gotoMovidas() {
    this.navCtrl.push(Movidas);
  }
  

  gotoPerfil() {
    this.email = this.global.get();
    this.dades.getUsuariEmail(this.email).subscribe(usuariJ => {
    this.usuari = usuariJ.json();
    this.navCtrl.push(Perfil, {usuari: this.usuari});
      })
 
    
  }
}
