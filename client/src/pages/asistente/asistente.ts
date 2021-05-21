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
          
          this.global.setsetEmail(this.seguits);
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
        
        this.global.setEmail(this.seguits);
        this.botoFollowUnfollow = false;

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
     
          this.storage.set("arraySeguitsSeguidors", this.seguits);
        });
        this.dades.getBloquejats(this.asistente.usuari_id).subscribe(user => {
          this.bloquejats = user.json();
          this.storage.set("arrayBloquejats", this.bloquejats);
          
        });
        this.dades.getBloquejadors(this.asistente.usuari_id).subscribe(user => {
          this.bloquejadors = user.json();
          this.storage.set("arrayBloquejadors", this.bloquejadors);
          
        })
      }
     
    this.storage
    .get("arraySeguitsSeguidors")
    .then((arraySeguitsSeguidors) => {
      
      for (let index in arraySeguitsSeguidors) {
        if (
          this.asistente.usuari_id == arraySeguitsSeguidors[index].seguit_id
        ) {
          this.botoFollowUnfollow = true;
        } else {
          this.botoFollowUnfollow = false;
        }
      }
    });
    this.storage
    .get("arrayBloquejats")
    .then((arrayBloquejats) => {
      
      for (let index in arrayBloquejats) {
     
        if (
          this.asistente.usuari_id == arrayBloquejats[index].bloquejat_id
        ) {
        
      
          this.botoSeguirBloquejar = true;
        } 
      
      }
      this.storage.get("arrayBloquejadors").then(arrayBloquejadors => {
        for (const key in arrayBloquejadors) {
          if (this.asistente.usuari_id == arrayBloquejadors[key].bloquejador_id) {
            this.botoSeguirBloquejar = true;
            
          }
        }
      })
    });
  }
}
