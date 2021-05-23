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

import { Http } from "@angular/http";
import { Seguits } from "../seguits/seguits";
import { Seguidors } from "../seguidors/seguidors";
import { Bloquejats } from "../bloquejats/bloquejats";
import { HomePage } from "../home/home";
import { MyApp } from "../../app/app.component";
import { GlobalProvider } from "../../providers/global/global";
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
  comptadorSeguits: number = 0;
  comptadorSeguidors: number = 0;
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
  emailLoguejat: any;
  usuariRebut: any;

  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
 
    public http: Http,
    public alertCtrl: AlertController,
    public global: GlobalProvider
  ) {
    if (navParams.get("usuari") != undefined) {
   
      this.usuariRebut = navParams.get("usuari");
      this.emailLoguejat = this.usuariRebut.email;
    } else {
      this.emailLoguejat = this.global.getEmail();

    }
    
  }
  logout() {
    // this.storage.clear();
    this.navCtrl.push(MyApp);
  }
  goToSeguits() {
    this.navCtrl.push(Seguits, { email: this.emailLoguejat });
  }
  goToSeguidors() {
    this.navCtrl.push(Seguidors, { email: this.emailLoguejat });
  }
  goToBloquejats() {
    this.navCtrl.push(Bloquejats, { email: this.emailLoguejat });
  }
  presentConfirmBloquear() {
    let alert = this.alertCtrl.create({
      title: "Confirm purchase",
      message: "Vols bloquejar aquest usuari?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            console.log("Cancel clicked");
          },
        },
        {
          text: "Aceptar",
          handler: () => {
            console.log("Aceptar clicked");
            this.bloquearUsuario();
          },
        },
      ],
    });
    alert.present();
  }
  presentConfirmDesbloquear() {
    let alert = this.alertCtrl.create({
      title: "Confirm purchase",
      message: "Vols desbloquejar aquest usuari?",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {},
        },
        {
          text: "Aceptar",
          handler: () => {
            this.desbloquearUsuario();
          },
        },
      ],
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
  
    if (this.emailLoguejat == this.global.getEmail()) {
      this.botonsDreta = true;
      this.botoBloquejar = true;
    } else {
      this.botonsDreta = false;
      this.botoBloquejar = false;
    }
  }
  desbloquearUsuario() {
    this.botonsIconosBloquejar = false;

    this.dades
      .deleteBloquejar(this.usuariRebut.usuari_id, this.usuari.id)
      .subscribe((data) => {});
  }

  ionViewWillEnter() {
    this.dades.getUsuariEmail(this.emailLoguejat).subscribe(user => {
this.usuari = user.json();
    
      this.descripcioUsuari = this.usuari.descripcio;
      this.personaid = this.usuari.persona_id;
      this.entitatid = this.usuari.entitat_id;
      this.nickname = this.usuari.nickname;
      this.vacunaUsuari = this.usuari.vacunaCovid;
      this.email = this.usuari.email;
      this.dataNaixement = this.usuari.dataNaixement;
      console.log(this.nickname) 
      
      if (this.usuari.genere == 0) {
        this.genereUsuari = "Hombre";
      } else if (this.usuari.genere == 1) {
        this.genereUsuari = "Mujer";
      } else {
        this.genereUsuari = "Otros";
      }
        this.dades.countSeguits(this.usuari.id).subscribe((countSeguits) => {
         this.comptadorSeguits = countSeguits.json();

       });
      let paises = [] as any;
      this.http
        .get("../../assets/json/countries.json")
        .subscribe((response) => {
          paises = response.json();
          
          for (let index in paises) {
            if (paises[index]["codeInteger"] == this.usuari.pais) {
              this.paisUsuari = paises[index]["name"];
             
              
            }
          }
        });
        if (this.usuari.persona_id != null) {
          this.dades
            .getPersona(this.usuari.persona_id)
            .subscribe((jPersona: any) => {
              this.persona = jPersona.json();
  
              this.persona.rol == 1
                ? (this.rolUsuari = "Follower")
                : this.persona.rol == 2
                ? (this.rolUsuari = "Leader")
                : this.persona.rol == 3
                ? (this.rolUsuari = "Follower/Leader")
                : (this.rolUsuari = "Leader/Follower");
  
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
        } else if (this.usuari.entitat_id != null) {
          this.dades
            .getEntitat(this.usuari.entitat_id)
            .subscribe((jEntitat: any) => {
              this.entitat = jEntitat.json();
              this.escola = this.entitat.escola;
              this.marca = this.entitat.marca;
              this.nomEntitat = this.entitat.nom;
            });
        }
      })
   
    
   
     
      
     
      // this.dades
      // .countSeguidors(this.usuari.id)
      // .subscribe((countSeguidors) => {
      //   this.comptadorSeguidors = countSeguidors.json();
      // });
      // this.dades.getBloquejats(this.usuari.id).subscribe((user) => {
      //   this.bloquejats = user.json();

      //   for (const key in this.bloquejats) {
      //     if (this.usuari.id == this.bloquejats[key].bloquejat_id) {
      //       this.botonsIconosBloquejar = true;
      //     }
      //   }
      // });
     
 
        // this.dades
        //   .countSeguits(this.usuari.id)
        //   .subscribe((countSeguits) => {
        //     this.comptadorSeguits = countSeguits.json();
        //   });

        // this.dades
        //   .countSeguidors(this.usuari.id)
        //   .subscribe((countSeguidors) => {
        //     this.comptadorSeguits = countSeguidors.json();
        //   });
        // this.dades.getBloquejats(this.usuari.id).subscribe((user) => {
        //   this.bloquejats = user.json();

        //   for (const key in this.bloquejats) {
        //     if (this.usuari.id == this.bloquejats[key].bloquejat_id) {
        //       this.botonsIconosBloquejar = true;
        //     }
        //   }
        // });

       
      
    
  }

  gotoEditUsuario(usuari: Usuari) {
    this.navCtrl.push(EditUsuario, { user: usuari });
  }
}
