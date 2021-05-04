import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DadesProductesService } from "../../services/dades-productes.service";
import { Storage } from "@ionic/storage";
import { Usuari } from "../../app/interfaces/iusuari";

/**
 * Generated class for the Crearevento page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-crearevento',
  templateUrl: 'crearevento.html',
})
export class Crearevento {
  
  tipusBalls=[];
  eventsUsuari=[];
  usuari: Usuari;
  persona_id: any;
  titulo:string;
  subtitulo:string;
  descripcion:string;
  tipoParticipacion:number;
  tipoBaile:number;
  crearNuevoPremio:boolean;
  premioNuevo:string="";
  premioExistente:number;
  fechaEvento:Date;
  pais:number;
  provincia:number;
  municipio:number;
  calle:string;
  premio_id:any;
  maxGanadores:number;
  constructor(public navCtrl: NavController, public navParams: NavParams, private dades: DadesProductesService,private storage: Storage) {
   
  }

  crearEvento(titulo,subtitulo,descripcion,tipoParticipacion,tipoBaile,crearNuevoPremio,premioNuevo,
    premioExistente,fechaEvento,pais,municipio,calle,provincia,maxGanadores){
    if(crearNuevoPremio){
      const formDataPremi = new FormData();
      formDataPremi.append("guanyador_id",this.persona_id);
      formDataPremi.append("titol",premioNuevo);
      formDataPremi.append("maxGuanyadors",maxGanadores);
      formDataPremi.append("categoria",tipoParticipacion);
      this.dades.crearPremi(formDataPremi).subscribe((data) => {
      });
      this.dades.getPremiUltim().subscribe((premiUltimJ) => {
        this.premio_id = premiUltimJ.json();
      });
    }else{
      this.premio_id = premioExistente;
    }
    const formData = new FormData();
    formData.append("usuari_id",this.persona_id);
    formData.append("ball_id",tipoBaile);
    formData.append("premi_id",this.premio_id);
    formData.append("pais",pais);
    formData.append("provincia",provincia);
    formData.append("municipi",municipio);
    formData.append("participacioTipus",tipoParticipacion);
    formData.append("titol",titulo);
    formData.append("subtitol",subtitulo);
    formData.append("carrer",calle);
    formData.append("descripcio",descripcion);
    formData.append("data",fechaEvento);

  }
  carregarEvents(){
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.persona_id = this.usuari.persona_id;
        this.dades.getPremisUsuari(this.persona_id).subscribe((events: any) => {
          var event = events.json();
          for (let index = 0; index < event.length; index++) {
            this.eventsUsuari[index]=event[index];
          }
        });
      });
    });
   
  }
  carregarBalls(){
    this.dades.getTipusBalls().subscribe((tipusBalls: any) => {
      var event = tipusBalls.json();
      for (let index = 0; index < event.length; index++) {
        this.tipusBalls[index]=event[index];
      }
    });
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Crearevento');
    this.carregarBalls();
    this.carregarEvents();
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.persona_id = this.usuari.persona_id;
      });
    });
  }
  

}
