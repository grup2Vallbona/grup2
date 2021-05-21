import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Login } from "../login/login";
import { Register } from "../register/register";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Eventos } from "../eventos/eventos";
import { Foro } from "../foro/foro";
import { Valoraciones } from "../valoraciones/valoraciones";
import { Novedades } from "../novedades/novedades";
import { Storage } from '@ionic/storage';
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the Principal page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-principal",
  templateUrl: "principal.html",
})
export class Principal {
  email: string;
  tab1Root = Novedades;
  tab2Root = Foro;
  tab3Root = Valoraciones;
  tab4Root = Eventos;

  constructor(
    private dades: DadesProductesService,
    public navParams: NavParams,
    public global: GlobalProvider
  ) {

    this.email = navParams.get("email");
    this.global.setEmail(this.email);
  
  }
}
