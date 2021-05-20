import { Component } from "@angular/core";
import {
  AlertController,
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
import { HomePage } from "../home/home";
import { MyApp } from "../../app/app.component";

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

  usuari: Usuari;
  rolUsuari: string = "";
  tipoUsuari: string = "";
  seguits = [];
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
  botonsDreta: boolean = true;
  botoBloquejar: boolean = true;
  botonsIconosBloquejar: boolean = false;

  usuariRebut: any;

  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http,
    public alertCtrl: AlertController
  ) {
    this.usuariRebut = navParams.get("usuari");
    this.email = this.usuariRebut.email;
  }
  logout() {
    this.storage.clear();
    this.navCtrl.push(MyApp);
  }
  goToSeguits() {
    this.navCtrl.push(Seguits, { usuari: this.usuariRebut });
  }
  goToSeguidors() {
    this.navCtrl.push(Seguidors, { usuari: this.usuariRebut });
  }
  goToBloquejats() {
    this.navCtrl.push(Bloquejats, { usuari: this.usuariRebut });
  }
  presentConfirmBloquear() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Vols bloquejar aquest usuari?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
            
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
            console.log('Aceptar clicked');
            this.bloquearUsuario();
          }
        }
      ]
    });
    alert.present();
  }
  presentConfirmDesbloquear() {
    let alert = this.alertCtrl.create({
      title: 'Confirm purchase',
      message: 'Vols desbloquejar aquest usuari?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          handler: () => {
           
            
          }
        },
        {
          text: 'Aceptar',
          handler: () => {
           this.desbloquearUsuario();
          }
        }
      ]
    });
    alert.present();
  }
  bloquearUsuario() {
    
 

    let idUsuariLoguejat: any;
    let idUsuariRebut: any;
    idUsuariLoguejat = this.usuari.id;
    idUsuariRebut = this.usuariRebut.usuari_id;
    const formDataBloquejar = new FormData();
    formDataBloquejar.append("bloquejat_id", idUsuariRebut);
    formDataBloquejar.append("bloquejador_id", idUsuariLoguejat);
    this.dades.bloquejar(formDataBloquejar).subscribe((data) => {
      this.botonsIconosBloquejar = true;

      this.dades.getSeguits(idUsuariLoguejat).subscribe((user) => {
        this.seguits = user.json();

        if (Object.keys(this.seguits).length === 0) {
          this.dades.getSeguidors(idUsuariLoguejat).subscribe((user) => {
            this.seguits = user.json();

            for (const index in this.seguits) {
              if (idUsuariRebut == this.seguits[index].seguidor_id) {
                this.dejarSeguir(idUsuariLoguejat, idUsuariRebut);
              }
            }
          });
        } else {
          for (const index in this.seguits) {
            if (idUsuariRebut == this.seguits[index].seguit_id) {
              this.dejarSeguir(idUsuariRebut, idUsuariLoguejat);
              console.log(idUsuariRebut);
              this.dades.getSeguits(idUsuariRebut).subscribe((data) => {
                for (const key in data.json()) {
                  if (idUsuariLoguejat == data.json()[key].seguit_id) {
                    this.dejarSeguir(idUsuariLoguejat, idUsuariRebut);
                  }
                }
              });
            }
          }
        }
      });
    });
  }

  dejarSeguir(idseguit, idseguidor) {
    this.dades.deleteSeguir(idseguit, idseguidor).subscribe((data) => {});
  }

  ngOnInit() {
    this.storage.get("email").then((emailUser) => {
      if (emailUser == this.usuariRebut.email) {
        this.botonsDreta = true;
        this.botoBloquejar = true;
      } else {
        this.botonsDreta = false;
        this.botoBloquejar = false;
      }
    });
  }
  desbloquearUsuario() {


    this.botonsIconosBloquejar = false;

    this.dades
      .deleteBloquejar(this.usuariRebut.usuari_id, this.usuari.id)
      .subscribe((data) => {});
  }

  ionViewWillEnter() {
    let paises = [] as any;
    this.http
      .get("../../assets/json/countries.json")
      .subscribe((response: any) => {
        paises = response.json();
        for (let index = 0; index < paises.length; index++) {
          if (paises[index]["codeInteger"] == this.usuariRebut.pais) {
            this.paisUsuari = paises[index]["name"];
          } else {
          }
        }
      });

    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((user) => {
        this.usuari = user.json();
        this.dades.getBloquejats(this.usuari.id).subscribe((user) => {
          this.bloquejats = user.json();

          // this.usuariRebut.usuari_id;
          for (const key in this.bloquejats) {
            if (
              this.usuariRebut.usuari_id == this.bloquejats[key].bloquejat_id
            ) {
              this.botonsIconosBloquejar = true;
            }
          }
        });
      });
    });

    this.personaid = this.usuariRebut.persona_id;
    this.entitatid = this.usuariRebut.entitat_id;
    this.nickname = this.usuariRebut.nickname;
    this.descripcioUsuari = this.usuariRebut.descripcio;
    this.dataNaixement = this.usuariRebut.dataNaixement;
    this.vacunaUsuari = this.usuariRebut.vacunaCovid;
    if (this.usuariRebut.genere == 0) {
      this.genereUsuari = "Hombre";
    } else if (this.usuariRebut.genere == 1) {
      this.genereUsuari = "Mujer";
    } else {
      this.genereUsuari = "Otros";
    }

    if (this.usuariRebut.persona_id != null) {
      this.dades
        .getPersona(this.usuariRebut.persona_id)
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

    if (this.usuariRebut.entitat_id != null) {
      this.dades
        .getEntitat(this.usuariRebut.entitat_id)
        .subscribe((jEntitat: any) => {
          this.entitat = jEntitat.json();
          this.escola = this.entitat.escola;
          this.marca = this.entitat.marca;
          this.nomEntitat = this.entitat.nom;
        });
    }
  }

  gotoEditUsuario(usuari: Usuari) {
    this.navCtrl.push(EditUsuario, { user: usuari });
  }
}
