import { Component } from "@angular/core";

import { IonicPage, NavController} from "ionic-angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

import { Perfil } from "../perfil/perfil";
import { GlobalProvider } from "../../providers/global/global";
import { Eventos } from "../eventos/eventos";

/**
 * Generated class for the Novedades page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-novedades",
  templateUrl: "novedades.html",
})
export class Novedades {
  usuari: Usuari;
  email:any;
  constructor(
    public navCtrl: NavController,    
    public dades: DadesProductesService,
    public global: GlobalProvider
  ) {}


  

  ngOnInit() { 
    
  

 
    
  }
} 
