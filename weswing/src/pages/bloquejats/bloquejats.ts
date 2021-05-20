import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { NavController, NavParams } from "@ionic/angular";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the BloquejatsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-bloquejats",
  templateUrl: "bloquejats.html",
})
export class Bloquejats {
  bloquejats = [];
  usuarisBloquejats = [];
  usuariBloquejador: Usuari;
  
  usuariBloquejat: Usuari;
  id: any;
  nom: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage
  ) {
    this.usuariBloquejador = this.navParams.get("usuari");
  }

  ionViewDidLoad() {
 
      this.dades.getUsuariEmail(this.usuariBloquejador.email).subscribe((jUsuario: any) => {
        this.usuariBloquejat = jUsuario.json();

        this.dades.getBloquejats(this.usuariBloquejador.id).subscribe((bloquejat) => {
            this.bloquejats = bloquejat.json();
          

            

            for (let index in this.bloquejats) {
              this.dades
                .getUsuari(this.bloquejats[index].bloquejat_id)
                .subscribe((as) => {
                  this.usuarisBloquejats = as.json();
           
             
                
                });
            }
          });
      });
    
  }
}
