import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Entitat } from "../../app/interfaces/ientitat";
import { Persona } from "../../app/interfaces/ipersona";
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
  personaU: Persona;
  nom: string;
  rol: string;
  descripcio: string;
  vacuna: number;
  prova: boolean = true;
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
    this.descripcio  = this.usuari.descripcio;
    this.vacuna = this.usuari.vacunaCovid;
    if (this.entitatid != null) {
      this.dades.getEntitat(this.entitatid).subscribe((jEntitat: any) => {
        this.entitatU = jEntitat.json();

        this.nom = this.entitatU.nom;
      });
    } else if (this.personaid != null) {
      this.dades.getPersona(this.personaid).subscribe((jPersona: any) => {
        this.personaU = jPersona.json();

        this.rol = this.personaU.rol;
      });
    }
  }
}
