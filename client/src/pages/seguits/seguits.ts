import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { Entitat } from "../../app/interfaces/ientitat";
import { Persona } from "../../app/interfaces/ipersona";
import { Usuari } from "../../app/interfaces/iusuari";
import { DadesProductesService } from "../../services/dades-productes.service";

/**
 * Generated class for the SeguitsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-seguits",
  templateUrl: "seguits.html",
})
export class Seguits {
  seguits = [];
  lal = [];
  usuariSeguidor: Usuari;
usuariSeguit: Usuari;
  id: any;
  nom: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage
  ) {
    this.usuariSeguidor = this.navParams.get("usuari");
  }

  ionViewWillEnter() {
    // this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(this.usuariSeguidor.email).subscribe((jUsuario: any) => {
        this.usuariSeguit = jUsuario.json();
        console.log(this.usuariSeguit);

        this.dades.getSeguits(this.usuariSeguit.id).subscribe((seguit) => {
          this.seguits = seguit.json();
          
         
          for (let index in this.seguits) {


            this.dades
            .getUsuari(this.seguits[index].seguit_id)
            .subscribe((as) => {
              this.usuariSeguit = as.json();
              this.lal.push(this.usuariSeguit);
              // this.nom = this.usuariS.nickname;
            });

           
          };
           
          
        });
     });
    // });
  }
}
