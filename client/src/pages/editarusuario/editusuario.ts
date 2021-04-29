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
  usuari: Usuari;
  aUsuari: Usuari[] = [];
  id: number;
  personaid: number;
  entitatid: number;
  entitatU: Entitat;
  persona: Persona;
  nom: string;
  rol: string;
  escola: number;
  marca: number;
  descripcio: string;
  dataNaixement: Date;
  //selectedGenere: boolean = true;
  selectedGenere: string;
  selectedPais: string;
  vacuna: number;
  iniciProfessorat: Date;
  genero: string;
  especialidadesProfesor: string = '';
  paises = [];
  tipoUsuari: string = '';
  instrument: string = '';
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
    this.http.get('../../assets/json/paises.json').subscribe(
      (response: any) => {
        // alert(response);
        paises = response.json();
        this.paises = paises;
        for (let index = 0; index < paises.length; index++) {
          
          if(paises[index]['codeInteger'] == this.usuari.pais){
            this.selectedPais = paises[index]['name']
          }
          
        }
      }, error => {
        console.log('Error: ', error.message);
      }
    )
  
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
        this.persona = jPersona.json();
        if (this.usuari.genere == 0) {
          this.selectedGenere = "hom";
        } else if (this.usuari.genere == 1) {
          //this.genero = "Catalan";
          this.selectedGenere = "fem";          
        } else {
//          this.genero = "Otros";
          this.selectedGenere = "otro";
        }

        this.rol = this.persona.rol;

        if (this.persona.music == 1 && this.persona.ballari == 0 && this.persona.professor == 0) {
          this.tipoUsuari = "Músico";
          this.instrument = this.persona.instrument;
        } else if (this.persona.music == 0 && this.persona.ballari == 1 && this.persona.professor == 0) {
          this.tipoUsuari = "Bailarín";
          this.dataNaixement = this.persona.dataNaixementBallari;
        } else if (this.persona.music == 0 && this.persona.ballari == 0 && this.persona.professor == 1) {
          this.tipoUsuari = "Profesor";
          this.iniciProfessorat = this.persona.iniciProfessorat;
        } else if (this.persona.music == 1 && this.persona.ballari == 1 && this.persona.professor == 1){
          this.tipoUsuari = "Músico, Bailarín, Profesor";
          this.instrument = this.persona.instrument;
          this.dataNaixement = this.persona.dataNaixementBallari;
          this.iniciProfessorat = this.persona.iniciProfessorat;
        } else if (this.persona.music == 1 && this.persona.ballari == 1 && this.persona.professor == 0){
          this.tipoUsuari = "Músico, Bailarín";
          this.instrument = this.persona.instrument;
          this.dataNaixement = this.persona.dataNaixementBallari;              
        } else if (this.persona.music == 1 && this.persona.professor == 1 && this.persona.ballari == 0){
          this.tipoUsuari = "Músico, Profesor";
          this.instrument = this.persona.instrument;                
          this.iniciProfessorat = this.persona.iniciProfessorat;
        } else if (this.persona.ballari == 1 && this.persona.professor == 1 && this.persona.music == 0){
          this.tipoUsuari = "Bailarín, Profesor";                
          this.dataNaixement = this.persona.dataNaixementBallari;
          this.iniciProfessorat = this.persona.iniciProfessorat;
        }
      });
    }
  }
}
