import { Component } from "@angular/core";
import { Http } from "@angular/http";
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
  ballari: any;
  music: any;
  nom: string;
  rol: any;
  professorToggle: boolean = false;
  personaToggle: boolean = false;
  ballariToggle: boolean = false;
  musicToggle: boolean = false;
  escola: any;
  escolaToggle: boolean = false;
  marcaToggle: boolean = false;
  marca: any;
  descripcio: string;
  descripcioM: string;
  anyEmpezarBailar: any;
  //selectedGenere: boolean = true;
  selectedGenere: any;
  selectedIdioma: string;
  selectedPais: string;
  vacuna: number;
  iniciProfessorat: any;
  genero: string;
  especialidadesProfesor: string = "";
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
    private http: Http
  ) {
    this.usuari = navParams.get("user");
    this.personaid = this.usuari.persona_id;
    this.entitatid = this.usuari.entitat_id;
    this.descripcio = this.usuari.descripcio;
  }

  ionViewDidLoad() {
    let paises = [] as any;
    this.http.get("../../assets/json/paises.json").subscribe(
      (response: any) => {
        // alert(response);
        paises = response.json();
        this.paises = paises;
        for (let index = 0; index < paises.length; index++) {
          if (paises[index]["codeInteger"] == this.usuari.pais) {
            this.selectedPais = paises[index]["name"];
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
        if (this.usuari.genere == 0) {
          this.selectedGenere = 0;
        } else if (this.usuari.genere == 1) {
          //this.genero = "Catalan";
          this.selectedGenere = 1;
        } else {
          //          this.genero = "Otros";
          this.selectedGenere = 2;
        }

        if (this.usuari.idioma == 0) {
          this.selectedIdioma = "esp";
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
    nicknameR,
    selectedIdiomaR,
    dataNaixementR,
    professorToggleR,
    ballariToggleR,
    musicToggleR,
    selectedGenereR,
    descripcioR,
    instrumentR,
    nomR,
    anyEmpezarBailarR,
    especialidadesProfesorR,
    iniciProfessoratR,
  
  ) {
    if (nicknameR == "") {
      nicknameR = this.nickname;
    }
    if (descripcioR == "") {
      descripcioR = this.descripcio;
    }

    if (professorToggleR) {
      this.professor = 1;
    } else {
      this.professor = 0;
    }
    if (musicToggleR) {
      this.music = 1;
    } else {
      this.music = 0;
    }
    if (ballariToggleR) {
      this.ballari = 1;
    } else {
      this.ballari = 0;
    }

    if (this.personaid != null) {
      const formDataModificarPersona = new FormData();
      formDataModificarPersona.append("rol", this.rol);
      formDataModificarPersona.append("ballari", this.ballari);
      formDataModificarPersona.append("music", this.music);
      formDataModificarPersona.append("professor", this.professor);
      formDataModificarPersona.append(
        "especialitatsProfessor",
        especialidadesProfesorR
      );
      formDataModificarPersona.append("instrument", instrumentR);
      formDataModificarPersona.append(
        "dataNaixementBallari",
        anyEmpezarBailarR
      );
      formDataModificarPersona.append("iniciProfessorat", iniciProfessoratR);
       // this.dades.modificarPersona()
      // this.dades.modificarUsuari()
    } else if (this.entitatid != null) {
      
      
      const formDataModificarEntitat = new FormData();
      formDataModificarEntitat.append("escola", this.entitatU.escola);
      formDataModificarEntitat.append("marca", this.entitatU.marca);
      formDataModificarEntitat.append("nom", nomR);
      
      this.dades.modificarEntitat(this.entitatU.id, formDataModificarEntitat).subscribe(entitatCreada => {
// this.d = entitatCreada.json();
// alert(this.d.nom);
       })
      // this.dades.modificarUsuari()
    }
  }
  verficacioEntitat(e) {
    if (e == "escola") {
      if (this.escolaToggle) {
        this.marcaToggle = false;
      } else {
        this.marcaToggle = true;
      }
    } else {
      if (this.marcaToggle) {
        this.escolaToggle = false;
      } else {
        this.escolaToggle = true;
      }
    }
  }
}
