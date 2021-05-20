import { Component } from "@angular/core";
import { Http } from "@angular/http";
import { Storage } from "@ionic/storage";
import { AngularFireAuth } from "angularfire2/auth";
import { NavController, NavParams } from "@ionic/angular";

import { Entitat } from "../../app/interfaces/ientitat";
import { Persona } from "../../app/interfaces/ipersona";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Perfil } from "../perfil/perfil";

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
  nickname: string = "";
  nicknameM: string = "";
  usuari: Usuari;
  aUsuari: Usuari[] = [];
  id: number;
  personaid: number;
  entitatid: number;
  entitatU: Entitat;
  d: Entitat;
  persona: Persona;
  professor: any;
  email: any;
  ballari: any;
  music: any;
  nom: string;
  rol: any;
  professorToggle: boolean;
  personaToggle: boolean;
  ballariToggle: boolean;
  musicToggle: boolean;
  escola: any;
  escolaToggle: boolean;
  marcaToggle: boolean;
  marca: any;
  descripcio: string;
  descripcioM: string;
  anyEmpezarBailar: any;
  //selectedGenere: boolean = true;
  selectedGenere: any;
  selectedIdioma: any;
  selectedPais: string;
  selectedRol: any;
  vacuna: any;
  iniciProfessorat: any;
  genero: string;
  paises = [];
  tipoUsuari: string = "";
  instrument: string = "";
  instrumentM: string = "";
  dataNaixement: any;
  estaVacunado: boolean = true;
  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,
    public storage: Storage,
    private firebaseAuth: AngularFireAuth
  ) {
    this.usuari = navParams.get("user");
    this.personaid = this.usuari.persona_id;
    this.entitatid = this.usuari.entitat_id;
    this.descripcio = this.usuari.descripcio;
    this.email = this.usuari.email;
  }

  ionViewWillEnter() {
    let paises = [] as any;
    this.http.get("../../assets/json/paises.json").subscribe(
      (response: any) => {
        // alert(response);
        paises = response.json();
        this.paises = paises;
        for (let index = 0; index < paises.length; index++) {
          if (paises[index]["codeInteger"] == this.usuari.pais) {
            this.selectedPais = paises[index]["codeInteger"];
          }
        }
      },
      (error) => {
        console.log("Error: ", error.message);
      }
    );
    this.dataNaixement = this.usuari.dataNaixement;
    this.descripcio = this.usuari.descripcio;
    this.nickname = this.usuari.nickname;
    if (this.usuari.vacunaCovid == 0) {
      this.estaVacunado = false;
    } else {
      this.estaVacunado = true;
    }

    if (this.usuari.idioma == 0) {
      this.selectedIdioma = 0;
    }
    if (this.usuari.genere == 0) {
      this.selectedGenere = 0;
    } else if (this.usuari.genere == 1) {
      //this.genero = "Catalan";
      this.selectedGenere = 1;
    } else {
      //          this.genero = "Otros";
      this.selectedGenere = 2;
    }
    this.vacuna = this.usuari.vacunaCovid;
    if (this.entitatid != null) {
      this.dades.getEntitat(this.entitatid).subscribe((jEntitat: any) => {
        this.entitatU = jEntitat.json();

        this.nom = this.entitatU.nom;
        this.escola = this.entitatU.escola;
        this.marca = this.entitatU.marca;

        if (this.entitatU.escola == 1) {
          this.escolaToggle = true;
        } else {
          this.escolaToggle = false;
        }

        if (this.entitatU.marca == 1) {
          this.marcaToggle = true;
        } else {
          this.marcaToggle = false;
        }
      });
    } else if (this.personaid != null) {
      this.dades.getPersona(this.personaid).subscribe((jPersona: any) => {
        this.persona = jPersona.json();
        this.instrument = this.persona.instrument;
        this.anyEmpezarBailar = this.persona.dataNaixementBallari;
        this.iniciProfessorat = this.persona.iniciProfessorat;
        this.rol = this.persona.rol;

        if (this.persona.rol == 1) {
          this.selectedRol = 1;
        } else if (this.persona.rol == 2) {
          this.selectedRol = 2;
        } else if (this.persona.rol == 3) {
          this.selectedRol = 3;
        } else if (this.persona.rol == 4) {
          this.selectedRol = 4;
        }

        if (this.persona.ballari == 1) {
          this.ballariToggle = true;
        } else {
          this.ballariToggle = false;
        }

        if (this.persona.music == 1) {
          this.musicToggle = true;
        } else {
          this.musicToggle = false;
        }

        if (this.persona.professor == 1) {
          this.professorToggle = true;
        } else {
          this.professorToggle = false;
        }
      });
    }
  }

  modificarUsuari(
    nicknameModificar,
    emailModificar,
    dataNaixementModificar,
    descripcioModificar,
    idiomaModificar,
    genereModificar,
    paisModificar,
    vacunaCovidModificar,
    ballariToggleModificar,
    musicToggleModificar,
    professorToggleModificar,
    rolModificar,
    instrumentModificar,
    dataNaixementBallariModificar,
    iniciProfessoratModificar,
    nomEntitatModificar
  ) {
   

    if (professorToggleModificar) {
      this.professor = 1;
    } else {
      this.professor = 0;
    }
    if (musicToggleModificar) {
      this.music = 1;
    } else {
      this.music = 0;
    }
    if (ballariToggleModificar) {
      this.ballari = 1;
    } else {
      this.ballari = 0;
    }

    if (vacunaCovidModificar) {
      this.vacuna = 1;
    } else {
      this.vacuna = 0;
    }

  
      this.firebaseAuth.auth.currentUser.updateEmail(emailModificar);
    
    if (this.personaid != null) {
      const formDataModificarPersona = new FormData();
      formDataModificarPersona.append("rol", rolModificar);
      formDataModificarPersona.append("ballari", this.ballari);
      formDataModificarPersona.append("music", this.music);
      formDataModificarPersona.append("professor", this.professor);
      formDataModificarPersona.append("instrument", instrumentModificar);
      formDataModificarPersona.append(
        "dataNaixementBallari",
        dataNaixementBallariModificar
      );
      formDataModificarPersona.append(
        "iniciProfessorat",
        iniciProfessoratModificar
      );

      const formDataModificarUsuari = new FormData();
      formDataModificarUsuari.append("nickname", nicknameModificar);
      formDataModificarUsuari.append("email", emailModificar);
      formDataModificarUsuari.append("idioma", idiomaModificar);
      formDataModificarUsuari.append("dataNaixement", dataNaixementModificar);
      formDataModificarUsuari.append("genere", genereModificar);
      formDataModificarUsuari.append("pais", paisModificar);
      formDataModificarUsuari.append("descripcio", descripcioModificar);
      formDataModificarUsuari.append("vacunaCovid", this.vacuna);

      this.dades
        .modificarPersona(this.persona.id, formDataModificarPersona)
        .subscribe((personaM) => {
          this.dades
            .modificarUsuari(this.usuari.id, formDataModificarUsuari)
            .subscribe((usuariMpersona) => {
              this.storage.set("email", emailModificar);
              this.navCtrl.push(Perfil);
            });
        });
    } else if (this.entitatid != null) {

     
      const formDataModificarEntitat = new FormData();
      formDataModificarEntitat.append("escola", this.entitatU.escola);
      formDataModificarEntitat.append("marca", this.entitatU.marca);
      formDataModificarEntitat.append("nom", nomEntitatModificar);


     
       
     

      const formDataModificarUsuari = new FormData();
      formDataModificarUsuari.append("nickname", nicknameModificar);
      formDataModificarUsuari.append("email", emailModificar);
      formDataModificarUsuari.append("idioma", idiomaModificar);
      formDataModificarUsuari.append("dataNaixement", dataNaixementModificar);
      formDataModificarUsuari.append("genere", genereModificar);
      formDataModificarUsuari.append("pais", paisModificar);
      formDataModificarUsuari.append("descripcio", descripcioModificar);
      formDataModificarUsuari.append("vacunaCovid", this.vacuna);

      this.dades
        .modificarEntitat(this.entitatU.id, formDataModificarEntitat)
        .subscribe((entitatCreada) => {
          this.dades
            .modificarUsuari(this.usuari.id, formDataModificarUsuari)
            .subscribe((usuariModifica) => {
              this.storage.set("email", emailModificar);
              this.navCtrl.push(Perfil);
            });
        });
    }
  }
}
