import { Component } from "@angular/core";
import { Http } from "@angular/http";

import { AngularFireAuth } from "angularfire2/auth";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Entitat } from "../../app/interfaces/ientitat";
import { Persona } from "../../app/interfaces/ipersona";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Perfil } from "../perfil/perfil";
import { GlobalProvider } from "../../providers/global/global";
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
  usuari: Usuari;
  personaid: number;
  entitatid: number;
  entitatU: Entitat;
  persona: Persona;
  professor: any;
  email: any;
  ballari: any;
  music: any;
  nom: string;
  rol: any;
  professorToggle: boolean;  
  ballariToggle: boolean;
  musicToggle: boolean;
  escola: any;
  escolaToggle: boolean;
  marcaToggle: boolean;
  marca: any;
  descripcio: string;
  anyEmp: any;  
  anyEmpezarBailar: any;
  selectedGenere: any;
  selectedIdioma: any;
  selectedPais: string;
  selectedRol: any;
  vacuna: any;
  iniciProfessorat: any; 
  paises = []; 
  instrument: string = "";
  dataNaixement: any;
  estaVacunado: boolean = true;

  constructor(
    private dades: DadesProductesService,
    public navCtrl: NavController,
    public navParams: NavParams,
    private http: Http,   
    private firebaseAuth: AngularFireAuth,
    public global: GlobalProvider
  ) {
    this.usuari = navParams.get("user");
    this.personaid = this.usuari.persona_id;
    this.entitatid = this.usuari.entitat_id;
   
    
  }

  ionViewWillEnter() {
    let paises = [] as any;
    this.http.get("../../assets/json/countries.json").subscribe(
      (response: any) => {
        // alert(response);
        paises = response.json();
        this.paises = paises;
        for (let index in paises) {
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
    this.vacuna = this.usuari.vacunaCovid;
    this.email = this.usuari.email;
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
      this.selectedGenere = 1;
    } else {   
      this.selectedGenere = 2;
    }

    
    if (this.entitatid != null) {
      this.dades.getEntitat(this.entitatid).subscribe((jEntitat: any) => {
        this.entitatU = jEntitat.json();

        this.nom = this.entitatU.nom;
        this.escola = this.entitatU.escola;
        this.marca = this.entitatU.marca;

        this.escolaToggle = this.entitatU.escola == 1;
        this.marcaToggle = this.entitatU.marca == 1;
      });
    } else if (this.personaid != null) {
      this.dades.getPersona(this.personaid).subscribe((jPersona: any) => {
        this.persona = jPersona.json();
        this.instrument = this.persona.instrument;
    
        this.anyEmpezarBailar = parseInt(this.persona.dataNaixementBallari);
      
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

        this.persona.ballari == 1
          ? (this.ballariToggle = true)
          : (this.ballariToggle = false);
        this.persona.music == 1
          ? (this.musicToggle = true)
          : (this.musicToggle = false);
        this.persona.professor == 1
          ? (this.professorToggle = true)
          : (this.professorToggle = false);
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
    professorToggleModificar ? (this.professor = 1) : (this.professor = 0);
    musicToggleModificar ? (this.music = 1) : (this.music = 0);
    ballariToggleModificar ? (this.ballari = 1) : (this.professor = 0);
    vacunaCovidModificar ? (this.vacuna = 1) : (this.vacuna = 0);

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
        .modifyPersona(this.persona.id, formDataModificarPersona)
        .subscribe((personaM) => {
          this.dades
            .modifyUsuari(this.usuari.id, formDataModificarUsuari)
            .subscribe((usuariMpersona) => {
              this.usuari = usuariMpersona.json();
              this.global.setEmail(emailModificar);
              this.navCtrl.push(Perfil, { usuari: this.usuari });
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
        .modifyEntitat(this.entitatU.id, formDataModificarEntitat)
        .subscribe((entitatCreada) => {
          this.dades
            .modifyUsuari(this.usuari.id, formDataModificarUsuari)
            .subscribe((usuariModifica) => {
              this.usuari = usuariModifica.json();
              this.global.setEmail(emailModificar);
              this.navCtrl.push(Perfil, { usuari: this.usuari });
            });
        });
    }
  }
}
