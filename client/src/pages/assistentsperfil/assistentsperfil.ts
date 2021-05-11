import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Entitat } from "../../app/interfaces/ientitat";
import { Persona } from "../../app/interfaces/ipersona";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the AssistentsperfilPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-assistentsperfil",
  templateUrl: "assistentsperfil.html",
})
export class Assistentsperfil {
  email: any;
  usuari: Usuari;
  persona: Persona;
  entitat: Entitat;
  idioma: string = "Español";
  pais: any;
  descripcio: any;
  nickname: any;
  genere: any;
  dataNaixement: any;
  vacuna: any;
  personaid: any;
  entitatid: any;
  rol: any;
  tipo: any;
  instrument: any;
  anyEmpezarBailar: any;
  iniciProfessorat: any;
  nom: any;
  escola: any;
  marca: any;
  usuariActual: any;
  idUsuariActual: any;
  assistent: any;
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public http: Http
  ) {
    this.assistent = navParams.get("asistente");
  }

  ionViewWillEnter() {

    this.storage.get("email").then(emailUser => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuariActual = jUsuario.json();
        this.idUsuariActual = this.usuariActual.id;
   
      })
    })
 
      // console.log(this.assistent.email)

      this.dades
        .getUsuariEmail(this.assistent.email)
        .subscribe((usuari) => {
          this.usuari = usuari.json();

          this.dades.getBloquejats(this.usuari.id).subscribe((usuarisBlo) => {
            var usuarisBloq = usuarisBlo.json();
          
            for (let index = 0; index < usuarisBloq.length; index++) {
              
            
              if (this.idUsuariActual == usuarisBloq[index].bloquejat_id) {
                alert("L'usuari t'ha bloquejat");
                
              } else {
               
              }
            }
          });
       

      this.nickname = this.usuari.nickname;
      this.email = this.usuari.email;
      this.descripcio = this.usuari.descripcio;
      this.dataNaixement = this.usuari.dataNaixement;
      this.vacuna = this.usuari.vacunaCovid;
      this.personaid = this.usuari.persona_id;
      this.entitatid = this.usuari.entitat_id;
      
      if (this.usuari.genere == 0) {
        this.genere = "Hombre";
      } else if (this.usuari.genere == 1) {
        this.genere = "Mujer";
      } else {
        this.genere = "Otros";
      }

      let paises = [] as any;
      this.http
        .get("../../assets/json/paises.json")
        .subscribe((response: any) => {
          // alert(response);
          paises = response.json();

          for (let index = 0; index < paises.length; index++) {
            if (paises[index]["codeInteger"] == this.usuari.pais) {
              this.pais = paises[index]["name"];
            }
          }
        });

      if (this.usuari.persona_id != null) {
        this.dades
          .getPersona(this.usuari.persona_id)
          .subscribe((personaJson) => {
            this.persona = personaJson.json();
            if (this.persona.rol == 1) {
              this.rol = "Follower";
            } else if (this.persona.rol == 2) {
              this.rol = "Leader";
            } else if (this.persona.rol == 3) {
              this.rol = "Follower/Leader";
            } else {
              this.rol = "Leader/Follower";
            }

            this.instrument = this.persona.instrument;
            this.anyEmpezarBailar = this.persona.dataNaixementBallari;
            this.iniciProfessorat = this.persona.iniciProfessorat;

            if (
              this.persona.music == 1 &&
              this.persona.ballari == 0 &&
              this.persona.professor == 0
            ) {
              this.tipo = "Músico";
            } else if (
              this.persona.music == 0 &&
              this.persona.ballari == 1 &&
              this.persona.professor == 0
            ) {
              this.tipo = "Bailarín";
            } else if (
              this.persona.music == 0 &&
              this.persona.ballari == 0 &&
              this.persona.professor == 1
            ) {
              this.tipo = "Profesor";
            } else if (
              this.persona.music == 1 &&
              this.persona.ballari == 1 &&
              this.persona.professor == 1
            ) {
              this.tipo = "Músico, Bailarín, Profesor";
            } else if (
              this.persona.music == 1 &&
              this.persona.ballari == 1 &&
              this.persona.professor == 0
            ) {
              this.tipo = "Músico, Bailarín";
            } else if (
              this.persona.music == 1 &&
              this.persona.professor == 1 &&
              this.persona.ballari == 0
            ) {
              this.tipo = "Músico, Profesor";
            } else if (
              this.persona.ballari == 1 &&
              this.persona.professor == 1 &&
              this.persona.music == 0
            ) {
              this.tipo = "Bailarín, Profesor";
            }
          });
      } else {
        this.dades
          .getEntitat(this.usuari.entitat_id)
          .subscribe((entitatJson) => {
            this.entitat = entitatJson.json();
            this.escola = this.entitat.escola;
            this.marca = this.entitat.marca;
            this.nom = this.entitat.nom;
          });
      }
    })
  }
  }

