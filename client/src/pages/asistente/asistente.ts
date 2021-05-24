import { Component, Input } from "@angular/core";
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
} from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Perfil } from "../perfil/perfil";
import { Usuari } from "../../app/interfaces/iusuari";
import { TouchID } from "ionic-native";
import { GlobalProvider } from "../../providers/global/global";
/**
 * Generated class for the AsistentePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: "page-asistente",
  templateUrl: "asistente.html",
})
export class Asistente {
  @Input() asistente;
  usuariBloquejador: Usuari;
  usuariBloquejat: Usuari;
idBloquejador: any;
idBloquejat: any; 
  constructor(
    public navCtrl: NavController,
    public dades: DadesProductesService,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public global: GlobalProvider
  ) {
  
  }

  gotoUsuario() {

    this.dades.getUsuariEmail(this.global.getEmail()).subscribe((user) => {
     
      let bloquejat: boolean = false;
      this.usuariBloquejador = user.json();
      this.idBloquejador = this.usuariBloquejador.id;
      this.dades.getUsuariEmail(this.asistente.email).subscribe((user) => {
        
        this.usuariBloquejat = user.json();
        this.idBloquejat = this.usuariBloquejat.id;
  
       
        this.dades.getBloquejats(this.idBloquejador).subscribe((arrBloquejats) => {
          for (let index in arrBloquejats.json()) {
            if (this.idBloquejat == arrBloquejats.json()[index].bloquejat_id) {
              bloquejat = true;
            }
          }
        });
        this.dades.getBloquejadors(this.idBloquejat).subscribe((arrBloquejadors) => {
          for (let index in arrBloquejadors.json()) {
            if (this.idBloquejador == arrBloquejadors.json()[index].bloquejador_id) {
              bloquejat = true;
            }
          }
          if (bloquejat) {
            this.messageBloqueo();
          } else {
            this.navCtrl.push(Perfil, { usuari: this.asistente });
          }
        });
      });
    });
  
  }

  ngOnInit() {}

  messageBloqueo() {
    let alert = this.alertCtrl.create({
      title: "Este usuario esta bloqueado",
      buttons: [
        {
          text: "Cancelar",
          role: "cancel",
          handler: () => {
            
          },
        },
      ],
    });
    alert.present();
  }
}
