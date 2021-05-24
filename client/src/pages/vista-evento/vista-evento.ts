import { Component } from "@angular/core";
import { NavController, NavParams } from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";

import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Asistentes } from "../asistentes/asistentes";
import { GlobalProvider } from "../../providers/global/global";
import * as Leaflet from 'leaflet';
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
  email:string;
  map : Leaflet.Map;
  marker:any;
  lat:any;
  lon:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
 
    public global: GlobalProvider
  ) {
    this.evento = navParams.get("evento");
  }
  mapa(){

      if(this.map == undefined){
        this.map = new Leaflet.Map('map').setView([this.evento.latitud,this.evento.longitud], 16);
        Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
        this.marker = Leaflet.marker([parseFloat(this.evento.latitud),parseFloat(this.evento.longitud)]).bindPopup(this.evento.titol).addTo(this.map);
      }
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
    let posicio: any = 76547654;

    if (this.isSelectedAssistir == true) {
      this.email = this.global.getEmail();
        this.dades.getUsuariEmail(this.email).subscribe((jUsuario) => {
          this.usuari = jUsuario.json();

          const formDataAssistent = new FormData();
          formDataAssistent.append("event_id", this.evento.id);
          formDataAssistent.append("usuari_id", this.usuari.id);

          this.dades.createAssistent(formDataAssistent).subscribe((asisstent) => {
            this.dades
          .countAssistents(this.evento.id)
          .subscribe((countAssistents) => {
            this.numeroAssistents = countAssistents.json();
          
          });
          });
        });
     
    } else {
 
      this.email = this.global.getEmail();
        this.dades.getUsuariEmail(this.email).subscribe((jUsuario) => {
          this.usuari = jUsuario.json();

          this.dades
            .deleteAssistent(this.evento.id, this.usuari.id)
            .subscribe((asisstent) => {
              this.dades
          .countAssistents(this.evento.id)
          .subscribe((countAssistents) => {
            this.numeroAssistents = countAssistents.json();
        
          });
            });
        });
      
    }
  }

  gotoEditEvento() {
    // this.navCtrl.push();
  }
  ionViewWillEnter() {
    this.email = this.global.getEmail();
    this.mapa();
    // this.storage.get("email").then((emailLoguejat) => {
      this.dades.getUsuari(this.evento.usuari_id).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.persona_id = this.usuari.id;
        this.nickname = this.usuari.nickname;
        this.editEvento();
        this.dades.getAssistentsId(this.evento.id).subscribe((data) => {
          this.asistents = data.json();

          for (let index = 0; index < this.asistents.length; index++) {
            if (this.email == this.asistents[index].email) {
             
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
    // });
  }
}
