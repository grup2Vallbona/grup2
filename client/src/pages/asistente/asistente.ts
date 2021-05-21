import { Component, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";

import { Storage } from "@ionic/storage";
import { Perfil } from "../perfil/perfil";
import { Persona } from "../../app/interfaces/ipersona";
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
  usuari: Usuari;
  idSeguit: any;
  idSeguidor: any;
  asistentes = [];
  seguits = [];
  bloquejadors = [];
  bloquejats = [];
  deixatSeguir = [];
  botoFollowUnfollow: boolean = false;
  botoSeguidor: boolean = false;
  botoSeguirBloquejar: boolean = false;
  idBloquejador: any;
  emailStorage: any;
  email:string;
  seguitsSeguidors = [];
  arrayBloquejats=[];
  arrayBloquejadors=[];
  constructor(
    public navCtrl: NavController,
    public dades: DadesProductesService,
    public navParams: NavParams,
    public storage: Storage,
    public global: GlobalProvider
  ) {}

  gotoUsuario() {
    this.navCtrl.push(Perfil, { usuari: this.asistente });
  }

  follow() {

    this.dades.getUsuariEmail(this.emailStorage).subscribe((user) => {
      this.usuari = user.json();
      this.idSeguidor = this.usuari.id;
      const formDataSeguir = new FormData();
      formDataSeguir.append("seguit_id", this.asistente.usuari_id);
      formDataSeguir.append("seguidor_id", this.idSeguidor);
      this.dades.seguir(formDataSeguir).subscribe((data) => {
        this.dades.getSeguits(this.asistente.usuari_id).subscribe((data) => {
          
           this.global.setSeguitSeguidor(this.seguits);
          this.botoFollowUnfollow = true;
        });
      });
    });
  }
  unfollow() {
    
    this.dades.getUsuariEmail(this.emailStorage).subscribe((user) => {
      this.usuari = user.json();
      this.idSeguidor = this.usuari.id;
      this.dades.getSeguits(this.asistente.usuari_id).subscribe((data) => {
        this.seguits = data.json();
        
         this.global.setSeguitSeguidor(this.seguits);
        this.botoFollowUnfollow = false;
        console.log(this.asistente.usuari_id);
        console.log(this.idSeguidor);
                this.dades
          .deleteSeguir(this.asistente.usuari_id, this.idSeguidor)
          .subscribe((data) => {});
      });
    });
  }

  ngOnInit() {
   
    
      this.email = this.global.getEmail();
      this.emailStorage = this.email;

      if (this.asistente.email == this.emailStorage) {
        this.botoSeguidor = true;
        this.dades.getSeguits(this.asistente.usuari_id).subscribe((data) => {
          this.seguits = data.json();
          
          this.global.setSeguitSeguidor(this.seguits);
          // this.storage.set("arraySeguitsSeguidors", this.seguits);
        });
        this.dades.getBloquejats(this.asistente.usuari_id).subscribe(user => {
          this.bloquejats = user.json();
          this.global.setBloquejats(this.bloquejats);
          // this.storage.set("arrayBloquejats", this.bloquejats);
          
        });
        this.dades.getBloquejadors(this.asistente.usuari_id).subscribe(user => {
          this.bloquejadors = user.json();
          this.global.setBloquejador(this.bloquejadors);
          // this.storage.set("arrayBloquejadors", this.bloquejadors);
          
        })
      }
     this.seguitsSeguidors = this.global.getSeguitSeguidor();
    // this.storage = this.seguitsSeguidors;
    // .get("arraySeguitsSeguidors")
    // .then((arraySeguitsSeguidors) => {
      
      for (let index in this.seguitsSeguidors) {
        if (
          this.asistente.usuari_id == this.seguitsSeguidors[index]['seguit_id']
        ) {
          this.botoFollowUnfollow = true;
        } else {
          this.botoFollowUnfollow = false;
        }
      }
    // });
    // this.storage
    // .get("arrayBloquejats")
    // .then((arrayBloquejats) => {
      this.arrayBloquejats = this.global.getBloquejats();
      for (let index in this.arrayBloquejats) {
     
        if (
          this.asistente.usuari_id == this.arrayBloquejats[index]['bloquejat_id']
        ) {
        
      
          this.botoSeguirBloquejar = true;
        } 
      
      }
      this.arrayBloquejadors = this.global.getBloquejador();
      // this.storage.get("arrayBloquejadors").then(arrayBloquejadors => {
        for (const key in this.arrayBloquejadors) {
          if (this.asistente.usuari_id == this.arrayBloquejadors[key]['bloquejador_id']) {
            this.botoSeguirBloquejar = true;
            
          }
        }
      // })
    // });
  }
}
