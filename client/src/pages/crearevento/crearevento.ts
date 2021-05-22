import { Component } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Storage } from "@ionic/storage";
import { Usuari } from "../../app/interfaces/iusuari";
import { Principal } from "../principal/principal";
import { Novedades } from "../novedades/novedades";
import { Eventos } from "../eventos/eventos";
import { Http } from "@angular/http";
import { GlobalProvider } from "../../providers/global/global";
import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx';

//leaflet imports
import * as Leaflet from 'leaflet';
/**
 * Generated class for the Crearevento page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-crearevento",
  templateUrl: "crearevento.html",
})
export class Crearevento {
  tipusBalls = [];
  eventsUsuari = [];
  usuari: Usuari;
  persona_id: any;
  titulo: string;
  subtitulo: string;
  descripcion: string; 
  tipoParticipacion: number;
  tipoBaile: number;
  crearNuevoPremio: boolean;
  premioNuevo: string = "";
  premioExistente: number;
  fechaEvento: Date;
  pais: number;
  provincia: string;
  municipio: string;
  calle: string;
  premio_id: any;
  maxGanadores: number;
  paises: any;
  ubicacionGeolocalizada:any;
  email:string;
  lat:any;
  lon:any;
  map : Leaflet.Map;
  marker:any;
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    private storage: Storage,
    private http: Http,
    public global: GlobalProvider,
    public geolocation: Geolocation
  ) {
    
  }
  mapaGeolocalizacion(){
     navigator.geolocation.getCurrentPosition((geoposition: Geoposition)=>{
       this.lat= geoposition.coords.latitude;
       this.lon= geoposition.coords.longitude;
       console.log(this.lat +' '+ this.lon);
       this.map = new Leaflet.Map('map').setView([this.lat,this.lon], 16);
       Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {}).addTo(this.map);
       this.map.on("click",(e)=>{
         if(this.map.hasLayer(this.marker)){
          this.map.removeLayer(this.marker);
         }
        this.lat = e.latlng.lat;
        this.lon = e.latlng.lng;
        this.marker = Leaflet.marker([this.lat,this.lon]).addTo(this.map);
       });
     });
   }
  
  crearEvento(
    titulo,
    subtitulo,
    descripcion,
    tipoParticipacion,
    tipoBaile,
    crearNuevoPremio,
    premioNuevo,
    premioExistente,
    fechaEvento,
    pais,
    municipio,
    calle,
    provincia,
    maxGanadores,
    
  ) {
    if (crearNuevoPremio) {
      console.log(this.persona_id);
      const formData = new FormData();
      formData.append("creador_id", this.persona_id);
      formData.append("titol", premioNuevo);
      formData.append("maxGuanyadors", maxGanadores);
      formData.append("categoria", tipoParticipacion);
      formData.append("usuari_id", this.persona_id);
      formData.append("ball_id", tipoBaile);
      formData.append("premi_id", this.premio_id);
      formData.append("pais", pais);
      formData.append("provincia", 1);
      formData.append("municipi", 2);
      formData.append("participacioTipus", tipoParticipacion);
      formData.append("titol", titulo);
      formData.append("subtitol", subtitulo);
      formData.append("carrer", "calle");
      formData.append("descripcio", descripcion);
      formData.append("data", fechaEvento);
      this.dades.createEventPremi(formData).subscribe((data) => {
        this.navCtrl.push(Novedades); 
      });
    } else {
      this.premio_id = premioExistente;
      this.dades.getPremi(this.premio_id).subscribe((premioJ) => {
        var premio = premioJ.json();
        const formData = new FormData();
        formData.append("usuari_id", this.persona_id);
        formData.append("ball_id", tipoBaile);
        formData.append("premi_id", premio.id);
        formData.append("pais", pais);
        formData.append("provincia", provincia);
        formData.append("municipi", municipio);
        formData.append("participacioTipus", premio.categoria);
        formData.append("titol", titulo);
        formData.append("subtitol", subtitulo);
        formData.append("carrer", calle);
        formData.append("descripcio", descripcion);
        formData.append("data", fechaEvento);
        this.dades.createEvent(formData).subscribe((data) => {
         this.navCtrl.push(Novedades);
        });
      });
    }

    
  }
  carregarPremis() {
    this.email = this.global.getEmail();
      // console.log(emailUser);
      this.dades.getUsuariEmail(this.email).subscribe((jUsuario: any) => {
        // console.log(jUsuario);
        this.usuari = jUsuario.json();
        this.persona_id = this.usuari.persona_id;
        this.dades.getPremisUsuari(this.persona_id).subscribe((events: any) => {
          var event = events.json();
          for (let index = 0; index < event.length; index++) {
            this.eventsUsuari[index] = event[index];
          }
        });
      });
    
  }
  carregarBalls() {
    this.dades.getTipusBalls().subscribe((tipusBalls: any) => {
      var event = tipusBalls.json();
      for (let index = 0; index < event.length; index++) {
        this.tipusBalls[index] = event[index];
      }
    });
  }

  ionViewWillEnter() {
    // console.log('ionViewDidLoad Crearevento');
    this.mapaGeolocalizacion();
    this.carregarBalls();
    this.carregarPremis();
    this.email = this.global.getEmail();
    console.log(this.email);
      this.dades.getUsuariEmail(this.email).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        this.persona_id = this.usuari.id;
        
      });
    this.http.get("../../assets/json/countries.json").subscribe(
      (response: any) => {
        // alert(response);
        this.paises = response.json();
      },
      (error) => {
        console.log("Error: ", error.message);
      }
    );
  }

}
