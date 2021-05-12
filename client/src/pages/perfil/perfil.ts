import { Component } from "@angular/core";
import {
  IonicPage,
  MenuController,
  NavController,
  NavParams,
} from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { Persona } from "../../app/interfaces/ipersona";
import { DadesProductesService } from "../../services/dades-productes.service";
import { EditUsuario } from "../editarusuario/editusuario";
import { Entitat } from "../../app/interfaces/ientitat";
import { Storage } from "@ionic/storage";
import { Http } from "@angular/http";
import { Seguits } from "../seguits/seguits";
import { Seguidors } from "../seguidors/seguidors";
import { Bloquejats } from "../bloquejats/bloquejats";

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
  bloquejats = [];
  emailLocal: string;
  usuari: Usuari;
  rolUsuari: string = "";
  tipoUsuari: string = "";
  hideBackButton: boolean = false;
  instrument: string = "";
  nomUsuari: string = "";
  email: string = "";
  dataNaixement: Date;
  anyEmpezarBailar: Date;
  iniciProfessorat: Date;
  nickname: string = "";
  idiomaUsuari: string = "Español";
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
  perfilUsuari: Usuari;
  botonsDreta: boolean = true;
  botoBloquejar: boolean = true;
  botonsIconosBloquejar: boolean = false;
  emailUser: any;
  usuariRebut: any;
  id: any;
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http,
    private menuCtrl: MenuController
  ) {
    this.usuariRebut = navParams.get("usuari");

    this.email = this.usuariRebut.email;

    this.storage.get("email").then((emailUser) => {
      this.emailUser = emailUser;

      if (this.emailUser == this.usuariRebut.email) {
        this.botonsDreta = true;
        this.botoBloquejar = true;
      } else {
        this.botonsDreta = false;
        this.botoBloquejar = false;
      }
    });
  }
  goToSeguits() {
    this.navCtrl.push(Seguits, { usuari: this.usuariRebut });
  }
  goToSeguidors() {
    this.navCtrl.push(Seguidors, { usuari: this.usuariRebut });
  }
  goToBloquejats() {
    this.navCtrl.push(Bloquejats);
  }
  toogleMenu() {
    this.menuCtrl.toggle();
  }
  bloquearUsuario() {
    confirm("Quieres bloquear a " + this.nickname + " ?");

    this.dades.getUsuariEmail(this.emailUser).subscribe((user) => {
      this.usuari = user.json();
      this.id = this.usuari.id;
      const formDataBloquejar = new FormData();
      formDataBloquejar.append("bloquejat_id", this.usuariRebut.usuari_id);
      formDataBloquejar.append("bloquejador_id", this.id);
      this.dades.bloquejar(formDataBloquejar).subscribe((data) => {
        this.dades.getBloquejats(this.id).subscribe((user) => {
          this.bloquejats = user.json();
          for (let index = 0; index < this.bloquejats.length; index++) {
            if (
              this.usuariRebut.usuari_id == this.bloquejats[index].bloquejat_id
            ) {
            
              this.botonsIconosBloquejar = true;
            } else {
            
              this.botonsIconosBloquejar = false;
            }
          }
        });
      });
    });
  }

  ngOnInit() {
    this.storage.get("email").then((emailUser) => {
      this.emailUser = emailUser;

      this.dades.getUsuariEmail(this.emailUser).subscribe((user) => {
        this.usuari = user.json();
        this.id = this.usuari.id;

        this.dades.getBloquejats(this.id).subscribe((user) => {
          this.bloquejats = user.json();
        
          this.usuariRebut.usuari_id
          for (let index = 0; index < this.bloquejats.length; index++) {
            if (
              this.usuariRebut.usuari_id == this.bloquejats[index].bloquejat_id
            ) {
              this.botonsIconosBloquejar = true;
            }
          }
        });
      });
    });
  }
  desbloquearUsuario() {
    confirm("Quieres desbloquear a " + this.nickname + " ?");

    this.dades.getUsuariEmail(this.emailUser).subscribe((user) => {
      this.usuari = user.json();
      this.id = this.usuari.id;
     
      this.dades.getBloquejats(this.id).subscribe((user) => {
        this.bloquejats = user.json();
     
        for (let index = 0; index < this.bloquejats.length; index++) {
         
          if (
            this.usuariRebut.usuari_id == this.bloquejats[index].bloquejat_id
          ) {
            this.botonsIconosBloquejar = false;
          } else {
            this.botonsIconosBloquejar = true;
          }
        }

        this.dades
          .eliminarBloquejar(this.usuariRebut.usuari_id, this.id)
          .subscribe((data) => {});
      });
    });
  }
  ionViewWillEnter() {
    let paises = [] as any;
    this.dades.getUsuariEmail(this.email).subscribe((user) => {
      this.usuari = user.json();
      this.http.get("../../assets/json/paises.json").subscribe(
        (response: any) => {
          // alert(response);
          paises = response.json();

          for (let index = 0; index < paises.length; index++) {
            if (paises[index]["codeInteger"] == this.usuari.pais) {
              this.paisUsuari = paises[index]["name"];
            } else {
            }
          }
        },
        (error) => {
          
        }
      );

      this.personaid = this.usuari.persona_id;
      this.entitatid = this.usuari.entitat_id;
      this.nickname = this.usuari.nickname;
      this.email = this.usuari.email;
      this.descripcioUsuari = this.usuari.descripcio;

      if (this.usuari.genere == 0) {
        this.genereUsuari = "Hombre";
      } else if (this.usuari.genere == 1) {
        this.genereUsuari = "Mujer";
      } else {
        this.genereUsuari = "Otros";
      }

      this.dataNaixement = this.usuari.dataNaixement;
      if (this.usuari.persona_id != null) {
        this.dades
          .getPersona(this.usuari.persona_id)
          .subscribe((jPersona: any) => {
            this.persona = jPersona.json();

            if (this.persona.rol == 1) {
              this.rolUsuari = "Follower";
            } else if (this.persona.rol == 2) {
              this.rolUsuari = "Leader";
            } else if (this.persona.rol == 3) {
              this.rolUsuari = "Follower/Leader";
            } else {
              this.rolUsuari = "Leader/Follower";
            }
            if (
              this.persona.music == 1 &&
              this.persona.ballari == 0 &&
              this.persona.professor == 0
            ) {
              this.tipoUsuari = "Músico";
              this.instrument = this.persona.instrument;
            } else if (
              this.persona.music == 0 &&
              this.persona.ballari == 1 &&
              this.persona.professor == 0
            ) {
              this.tipoUsuari = "Bailarín";
              this.anyEmpezarBailar = this.persona.dataNaixementBallari;
            } else if (
              this.persona.music == 0 &&
              this.persona.ballari == 0 &&
              this.persona.professor == 1
            ) {
              this.tipoUsuari = "Profesor";
              this.iniciProfessorat = this.persona.iniciProfessorat;
            } else if (
              this.persona.music == 1 &&
              this.persona.ballari == 1 &&
              this.persona.professor == 1
            ) {
              this.tipoUsuari = "Músico, Bailarín, Profesor";
              this.instrument = this.persona.instrument;
              this.anyEmpezarBailar = this.persona.dataNaixementBallari;
              this.iniciProfessorat = this.persona.iniciProfessorat;
            } else if (
              this.persona.music == 1 &&
              this.persona.ballari == 1 &&
              this.persona.professor == 0
            ) {
              this.tipoUsuari = "Músico, Bailarín";
              this.instrument = this.persona.instrument;
              this.anyEmpezarBailar = this.persona.dataNaixementBallari;
            } else if (
              this.persona.music == 1 &&
              this.persona.professor == 1 &&
              this.persona.ballari == 0
            ) {
              this.tipoUsuari = "Músico, Profesor";
              this.instrument = this.persona.instrument;
              this.iniciProfessorat = this.persona.iniciProfessorat;
            } else if (
              this.persona.ballari == 1 &&
              this.persona.professor == 1 &&
              this.persona.music == 0
            ) {
              this.tipoUsuari = "Bailarín, Profesor";
              this.anyEmpezarBailar = this.persona.dataNaixementBallari;
              this.iniciProfessorat = this.persona.iniciProfessorat;
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
  }

  gotoEditUsuario(usuari: Usuari) {
    this.navCtrl.push(EditUsuario, { user: usuari });
  }
}
