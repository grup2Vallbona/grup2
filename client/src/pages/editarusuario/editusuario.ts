import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Entitat } from "../../app/interfaces/ientitat";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the Creargrupo page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-editusuari",
  templateUrl: "editusuari.html",
})
export class EditUsuario {
  usuari: Usuari;
  aUsuari: Usuari[] = [];
  id: number;
  personaid: number;
  entitatid: number;
  entitatU: Entitat;
  nom: string;
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.usuari = navParams.get("user");
    this.personaid = this.usuari.persona_id;
    this.entitatid = this.usuari.entitat_id;
  }

  ionViewDidLoad() {
    this.dades.getEntitat(this.entitatid).subscribe((jEntitat: any) => {
      this.entitatU = jEntitat.json();
      this.nom = this.entitatU.nom;
    });

    
    
  }
}
