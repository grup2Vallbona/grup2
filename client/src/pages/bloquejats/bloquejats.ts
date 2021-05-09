import { Component } from "@angular/core";
import { Storage } from "@ionic/storage";
import { IonicPage, NavController, NavParams } from "ionic-angular";
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
  lal = [];
  usuari: Usuari;

  usuariS: Usuari;
  id: any;
  nom: any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage
  ) {}

  ionViewDidLoad() {
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();

        this.dades.getBloquejats(this.usuari.id).subscribe((bloquejat) => {
            this.bloquejats = bloquejat.json();
          

            

            for (let index in this.bloquejats) {
              this.dades
                .getUsuari(this.bloquejats[index].bloquejat_id)
                .subscribe((as) => {
                  this.usuari = as.json();
                  this.lal.push(this.usuari);
             
                  // this.nom = this.usuariS.nickname;
                });
            }
          });
      });
    });
  }
}
