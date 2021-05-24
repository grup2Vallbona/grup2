import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Eventos } from "../eventos/eventos";
import { GlobalProvider } from "../../providers/global/global";
import { Perfil } from "../perfil/perfil";
import { Novedades } from "../novedades/novedades";
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
  
  tab2Root = Eventos;
  tab3Root = Perfil;
 
  constructor(
    
    public navParams: NavParams,
    public global: GlobalProvider,
    public ba: NavController
  ) {

    this.email = navParams.get("email");
  
    this.global.setEmail(this.email);
   
  }
}
