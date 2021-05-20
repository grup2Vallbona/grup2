import { Component, NgZone } from "@angular/core";
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
  usuarisBloquejats = [];
  usuariRebut: Usuari;
  usuari: Usuari;
  usuariBloquejat: Usuari;
  id: any;
  nom: any;
 
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    public storage: Storage,
    public zone: NgZone
  ) {
    this.usuariRebut = this.navParams.get("usuari");
   
  }

  ngOnInit() {


   
    

    this.dades
      .getUsuariEmail(this.usuariRebut.email)
      .subscribe((jUsuario: any) => {
        this.usuariBloquejat = jUsuario.json();

        this.dades
          .getBloquejats(this.usuariBloquejat.id)
          .subscribe((bloquejat) => {
            this.usuarisBloquejats = bloquejat.json();
          
           
          });
      });
  }
  doRefresh(event) {
    console.log('Begin async operation');

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  }
  
}
