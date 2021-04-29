import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { Persona } from "../../app/interfaces/ipersona";
import { DadesProductesService } from "../../services/dades-productes.service";
import { EditUsuario } from "../editarusuario/editusuario";
import { Entitat } from "../../app/interfaces/ientitat";
import { Storage } from "@ionic/storage";
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
  emailLocal: string;
  usuari: Usuari;
  rolUsuari: string = "";
  tipoUsuari: string = "";
  instrument: string = "";
  nomUsuari: string = "";
  email: string = "";
  dataNaixement: Date;
  iniciImparticions: Date;
  nickname: string = "";
  idiomaUsuari: string = "Español";
  especialidadesProfesor: string = '';
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
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.personaid = this.usuari.persona_id;
        this.entitatid = this.usuari.entitat_id;
        this.nickname = this.usuari.nickname;
        this.email = this.usuari.email;
        this.descripcioUsuari = this.usuari.descripcio;

        if (this.usuari.pais == 34) {
          this.paisUsuari = "Afganistan";
        }
        if (this.usuari.persona_id != null) {
          this.dades
            .getPersona(this.usuari.persona_id)
            .subscribe((jPersona: any) => {
              this.persona = jPersona.json();
              this.dataNaixement = this.persona.dataNaixementBallari;
              if (this.usuari.genere == 0) {
                this.genereUsuari = "Home";
              } else {
                this.genereUsuari = "Dona";
              }
              // this.rolUsuari = this.persona.rol;
              if (this.persona.music == 1) {
                this.tipoUsuari = "Music";
                this.instrument = this.persona.instrument;
              } else if (this.persona.ballari == 1) {
                this.tipoUsuari = "Bailarin";
                this.dataNaixement = this.persona.dataNaixementBallari;
              } else if (this.persona.professor == 1) {
                this.tipoUsuari = "Profesor";
                this.iniciImparticions = this.persona.iniciProfessorat;
              }
            });
        }
        this.vacunaUsuari = this.usuari.vacunaCovid;

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
    });
  }

  gotoEditUsuario(usuari: Usuari) {
    this.navCtrl.push(EditUsuario, { user: usuari });
  }
}
