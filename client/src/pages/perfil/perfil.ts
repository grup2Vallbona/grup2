import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";

import { DadesProductesService } from "../../services/dades-productes.service";
import { EditUsuario } from "../editarusuario/editusuario";
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
  constructor(private dades: DadesProductesService, public navCtrl: NavController, public navParams: NavParams) {}
  usuari: Usuari;
  rolUsuari: string = "";
  tipoUsuari: string = "";
  instrument: string = "";
  nomUsuari: string = "";
  dataNaixement: string = "";
  nicknameUsuari: string = "";
  idiomaUsuari: string = "";
  genereUsuari: string = "";
  paisUsuari: string = "";
  descripcioUsuari: string = "";
  vacunaUsuari: string = "";
  imagenUsuari: string = "";
  er: any;
  ionViewDidLoad() {
    this.dades.getDades(2).subscribe((jUsuario: any) => {
      this.usuari = jUsuario.json();
      this.nomUsuari = this.usuari.nickname;
      this.descripcioUsuari = this.usuari.idEscola.nom;
      
      
       
    });
  }

  gotoEditUsuario() {
    this.navCtrl.push(EditUsuario);
  }
}