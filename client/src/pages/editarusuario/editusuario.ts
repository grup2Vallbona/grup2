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
  escola: number;
  marca: number;
  descripcio: string;
  //selectedGenere: boolean = true;
  selectedGenere: string;
  vacuna: number;
  genero: string;
  estaVacunado: boolean = true;
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {
    this.usuari = navParams.get("user");
    this.personaid = this.usuari.persona_id;
    this.entitatid = this.usuari.entitat_id;
    this.descripcio = this.usuari.descripcio;
  }

  ionViewDidLoad() {
    this.descripcio = this.usuari.descripcio;
    if (this.usuari.vacunaCovid == 0) {
      this.estaVacunado = false;
    } else {
      this.estaVacunado = true;
    }
    this.vacuna = this.usuari.vacunaCovid;
    if (this.entitatid != null) {
      this.dades.getEntitat(this.entitatid).subscribe((jEntitat: any) => {
        this.entitatU = jEntitat.json();

        this.nom = this.entitatU.nom;
        this.escola = this.entitatU.escola;
        this.marca = this.entitatU.marca;
      });
    } else if (this.personaid != null) {
      this.dades.getPersona(this.personaid).subscribe((jPersona: any) => {
        this.personaU = jPersona.json();
        if (this.usuari.genere == 0) {
          this.selectedGenere = "hom";
        } else if (this.usuari.genere == 1) {
          //this.genero = "Catalan";
          this.selectedGenere = "fem";          
        } else {
//          this.genero = "Otros";
          this.selectedGenere = "otro";
        }

        this.rol = this.personaU.rol;
      });
    }
  }
}
