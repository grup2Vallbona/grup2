import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { IProducte } from "../../app/interfaces/iproducte";

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
  selector: "page-usuario",
  templateUrl: "usuario.html",
})
export class Usuario {
  constructor(private dades: DadesProductesService, public navCtrl: NavController, public navParams: NavParams) {}
  usuari: IProducte[] = [];
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
    this.dades.getDades().subscribe((usuario: Array<IProducte>) => {});
  }

  gotoEditUsuario() {
    this.navCtrl.push(EditUsuario);
  }
}
