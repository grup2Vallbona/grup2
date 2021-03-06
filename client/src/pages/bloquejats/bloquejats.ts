import { Component, NgZone } from "@angular/core";

import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the BloquejatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-bloquejats",
  templateUrl: "bloquejats.html",
})
export class Bloquejats {
  bloquejats = [];
  usuarisBloquejats = [];
  usuariRebut: Usuari;
  usuari: Usuari;
  usuariBloquejat: Usuari;
  id: any;
  nom: any;
  email: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
   
    public zone: NgZone
  ) {
    this.email = this.navParams.get("email");
  }

  ngOnInit() {
    this.dades.getUsuariEmail(this.email).subscribe((jUsuario: any) => {
      this.usuariBloquejat = jUsuario.json();
      this.dades
        .getBloquejats(this.usuariBloquejat.id)
        .subscribe((bloquejat) => this.usuarisBloquejats = bloquejat.json());
    });
  }
  
}
