import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { Persona } from "../../app/interfaces/ipersona";
import { DadesProductesService } from "../../services/dades-productes.service";
import { EditUsuario } from "../editarusuario/editusuario";
import { Entitat } from "../../app/interfaces/ientitat";
/**
 * Generated class for the Usuario page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-perfil",
  templateUrl: "perfil.html",
})
export class Perfil {
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams
  ) {}
  usuari: Usuari;
  rolUsuari: string = "";
  tipoUsuari: string = "";
  instrument: string = "";
  nomUsuari: string = "";
  dataNaixement: Date;
  iniciImparticions: Date;
  nickname: string = "";
  idiomaUsuari: string = "";
  genereUsuari: string = "";
  paisUsuari: string = "";
  descripcioUsuari: string = "";
  vacunaUsuari: number;
  imagenUsuari: string = "";
  escola: number;
  marca: number;
  nomEntitat: string = "";
  persona: Persona;
  entitat: Entitat;
  personaid: number;
  entitatid: number;
  ionViewDidLoad() {
    this.dades.getDades(12).subscribe((jUsuario: any) => {
      this.usuari = jUsuario.json();
      this.personaid = this.usuari.persona_id;
      this.entitatid = this.usuari.entitat_id;
      this.nickname = this.usuari.nickname;
      if (this.usuari.idioma == 76) {
        this.idiomaUsuari = "Catala";
      } else {
        this.idiomaUsuari = "Español";
      }

      if (this.usuari.persona_id != null) {
        this.dades
          .getPersona(this.usuari.persona_id)
          .subscribe((jPersona: any) => {
            this.persona = jPersona.json();

            if (this.usuari.genere == 0) {
              this.genereUsuari = "Home";
            } else {
              this.genereUsuari = "Dona";
            }
            this.rolUsuari = this.persona.rol;
            if (this.persona.music == 1) {
              this.tipoUsuari = "Music";
              this.instrument = this.persona.instrument;
            } else if (this.persona.ballari == 1) {
              this.tipoUsuari = "Bailarin";
              this.dataNaixement = this.persona.dataNaixementBallari;
            } else if (this.persona.professor == 1) {
              this.tipoUsuari = "Profesor";
              this.iniciImparticions = this.persona.iniciImparticions;
            }
          });
      }
      this.vacunaUsuari = this.usuari.vacunaCOVID;
      if (this.usuari.entitat_id != null) {
        this.dades
          .getEntitat(this.usuari.entitat_id)
          .subscribe((jEntitat: any) => {
            this.entitat = jEntitat.json();
            this.escola = this.entitat.escola;
            this.marca = this.entitat.marca;
            this.nomEntitat = this.entitat.nom;
          });
      }
    });
  }

  gotoEditUsuario(id: number) {
   
    this.navCtrl.push(EditUsuario ,  {
      idUsuari: id
  });
  }
}
