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
// import { Geolocation,Geoposition } from '@ionic-native/geolocation/ngx';
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
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private dades: DadesProductesService,
    private storage: Storage,
    private http: Http,
    public global: GlobalProvider
    // public geolocation: Geolocation
  ) {}
  // mapaGeolocalizacion(){
  //   this.geolocation.getCurrentPosition().then((geoposition: Geoposition)=>{
  //     console.log(geoposition);
  //   });
  // }
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
    this.email = this.global.get();
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
    this.carregarBalls();
    this.carregarPremis();
    this.email = this.global.get();
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
