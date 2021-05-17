import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Storage } from "@ionic/storage";
import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Asistentes } from "../asistentes/asistentes";
/**
 * Generated class for the VistaEventoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: "vista-evento",
  templateUrl: "vista-evento.html",
})
export class VistaEvento {
  usuari;
  nickname: string = "";
  persona_id;
  asistents = [];
  evento;
  numeroAssistents: any;
  text: string;
  tuEvento: boolean = false;
  isSelectedAssistir: boolean = false;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    private storage: Storage
  ) {
    this.evento = navParams.get("evento");
  }
  vistaAssistentes() {
    this.navCtrl.push(Asistentes, { evento: this.evento });
  }
  editEvento() {
    if (this.evento.usuari_id == this.persona_id) {
      this.tuEvento = true;
    }
  }
  assistirEvent() {
    let posicio: any = 34;

    if (this.isSelectedAssistir == true) {
      this.storage.get("email").then((emailUser) => {
        this.dades.getUsuariEmail(emailUser).subscribe((jUsuario) => {
          this.usuari = jUsuario.json();

          const formDataAssistent = new FormData();
          formDataAssistent.append("event_id", this.evento.id);
          formDataAssistent.append("usuari_id", this.usuari.id);
          formDataAssistent.append("posicio", posicio);

          this.dades.assistent(formDataAssistent).subscribe((asisstent) => {
            this.dades
          .countAssistents(this.evento.id)
          .subscribe((countAssistents) => {
            this.numeroAssistents = countAssistents.json();
          
          });
          });
        });
      });
    } else {
      console.log('hola pepsicola')
      this.storage.get("email").then((emailUser) => {
        this.dades.getUsuariEmail(emailUser).subscribe((jUsuario) => {
          this.usuari = jUsuario.json();

          this.dades
            .eliminarAssistent(this.evento.id, this.usuari.id)
            .subscribe((asisstent) => {
              this.dades
          .countAssistents(this.evento.id)
          .subscribe((countAssistents) => {
            this.numeroAssistents = countAssistents.json();
        
          });
            });
        });
      });
    }
  }
  gotoEscuela() {
    console.log("nada");
  }
  gotoEditEvento() {
    // this.navCtrl.push();
  }
  ionViewWillEnter() {
    this.storage.get("email").then((emailLoguejat) => {
      this.dades.getUsuari(this.evento.usuari_id).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.persona_id = this.usuari.id;
        this.nickname = this.usuari.nickname;
        this.editEvento();
        this.dades.getAssistentsId(this.evento.id).subscribe((data) => {
          this.asistents = data.json();

          for (let index = 0; index < this.asistents.length; index++) {
            if (emailLoguejat == this.asistents[index].email) {
              this.isSelectedAssistir = true;
            }
          }
        });
        this.dades
          .countAssistents(this.evento.id)
          .subscribe((countAssistents) => {
            this.numeroAssistents = countAssistents.json();

          });
      });
    });
  }
}
