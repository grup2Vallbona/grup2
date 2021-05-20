// import { Component, Input } from '@angular/core';
// import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { DadesProductesService } from '../../services/dades-productes.service';
// import { Assistentsperfil } from '../assistentsperfil/assistentsperfil';
// import { Storage } from "@ionic/storage";
// import { Perfil } from "../perfil/perfil";
// import { Persona } from '../../app/interfaces/ipersona';
// import { Usuari } from '../../app/interfaces/iusuari';

// /**
//  * Generated class for the AsistentePage page.
//  *
//  * See http://ionicframework.com/docs/components/#navigation for more info
//  * on Ionic pages and navigation.
//  */

// @Component({
//   selector: "page-asistente",
//   templateUrl: "asistente.html",
// })
// export class Asistente {
//   @Input() asistente;
//   email: any;
//   persona: Persona;
//   usuari: Usuari;
//   idSeguit: any;
//   idSeguidor: any;
//   seguits = [];
//   deixatSeguir = [];
//   botoFollowUnfollow: boolean = false;
//   botoSeguidor: boolean = false;
//   constructor(
//     public navCtrl: NavController,
//     public dades: DadesProductesService,
//     public navParams: NavParams,
//     public storage: Storage
//   ) {

//   }

//   gotoUsuario() {

//     this.storage.get("email").then(emailUser => {
//       this.email = emailUser;

//       if (this.email == this.asistente.email) {
//         this.navCtrl.push(Perfil);
//       } else {
//         this.navCtrl.push(Assistentsperfil, { asistente: this.asistente });
//       }
//     });


//   }
//   follow() {
//     const formDataSeguir = new FormData();
//     formDataSeguir.append("seguit_id", this.asistente.usuari_id);
//     formDataSeguir.append("seguidor_id", this.idSeguidor);
//     this.dades.seguir(formDataSeguir).subscribe((data) => {
//       this.dades.getSeguits(this.idSeguidor).subscribe((data) => {
//         this.seguits = data.json();
//         for (let i = 0; i < this.seguits.length; i++) {
//           if (this.asistente.usuari_id == this.seguits[i].seguit_id) {
//             this.botoFollowUnfollow = true;
//           } else {
//             this.botoFollowUnfollow = false;
//           }
//         }
//       });

//     });
//   }
//   unfollow() {
//     this.dades.getSeguits(this.idSeguidor).subscribe((data) => {


//       this.deixatSeguir = data.json();
//       for (let i = 0; i < this.deixatSeguir.length; i++) {
//         if (this.asistente.usuari_id == this.deixatSeguir[i].seguit_id) {
//           this.botoFollowUnfollow = false;
//         } else {
//           this.botoFollowUnfollow = true;
//         }
//       }
//       this.dades.deixarSeguir(this.asistente.usuari_id, this.idSeguidor).subscribe((data) => {
//       });
//     });

//   }
//   ngOnInit() {
//     this.storage.get("email").then(emailUser => {

//       this.dades.getUsuariEmail(emailUser).subscribe((data) => {
//         this.usuari = data.json();
//         this.idSeguidor = this.usuari.id

//         this.dades.getSeguits(this.idSeguidor).subscribe((data) => {
//           this.seguits = data.json();

//           if (this.idSeguidor == this.asistente.usuari_id) {
//             this.botoSeguidor = true;
//           }
//           for (let i = 0; i < this.seguits.length; i++) {
//             if (this.asistente.usuari_id == this.seguits[i].seguit_id) {
//               this.botoFollowUnfollow = true;
//             }
            
//           }
//         })
//       });
//     });
//   }

// }
import { Component, Input } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Assistentsperfil } from "../assistentsperfil/assistentsperfil";
import { Storage } from "@ionic/storage";
import { Perfil } from "../perfil/perfil";
import { Persona } from "../../app/interfaces/ipersona";
import { Usuari } from "../../app/interfaces/iusuari";

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
  persona: Persona;
  usuari: Usuari;
  idSeguit: any;
  idSeguidor: any;
  asistentes = [];
  seguits = [];
  bloquejats = [];
  deixatSeguir = [];
  botoFollowUnfollow: boolean = false;
  botoSeguidor: boolean = false;
  idBloquejador: any;
  emailLoguejat: any;

  constructor(
    public navCtrl: NavController,
    public dades: DadesProductesService,
    public navParams: NavParams,
    public storage: Storage
  ) {}

  gotoUsuario() {
    this.navCtrl.push(Perfil, { usuari: this.asistente });
  }

  follow() {
    this.dades.getUsuariEmail(this.emailLoguejat).subscribe((user) => {
      this.usuari = user.json();
      this.idSeguidor = this.usuari.id;
      const formDataSeguir = new FormData();
      formDataSeguir.append("seguit_id", this.asistente.usuari_id);
      formDataSeguir.append("seguidor_id", this.idSeguidor);
      this.dades.seguir(formDataSeguir).subscribe((data) => {
        this.dades.getSeguits(this.idSeguidor).subscribe((data) => {
          this.seguits = data.json();
          this.storage.set("arraySeguitsSeguidors", this.seguits);
          for (let i = 0; i < this.seguits.length; i++) {
            if (this.asistente.usuari_id == this.seguits[i].seguit_id) {
              this.botoFollowUnfollow = true;
            } else {
              this.botoFollowUnfollow = false;
            }
          }
        });
      });
    });
  }
  unfollow() {
    this.dades.getUsuariEmail(this.emailLoguejat).subscribe((user) => {
      this.usuari = user.json();
      this.idSeguidor = this.usuari.id;
      this.dades.getSeguits(this.idSeguidor).subscribe((data) => {
        this.deixatSeguir = data.json();
        this.storage.set("arraySeguitsSeguidors", this.deixatSeguir);
        for (let i = 0; i < this.deixatSeguir.length; i++) {
          if (this.asistente.usuari_id == this.deixatSeguir[i].seguit_id) {
            this.botoFollowUnfollow = false;
          } else {
            this.botoFollowUnfollow = true;
          }
        }
        this.dades
          .deixarSeguir(this.asistente.usuari_id, this.idSeguidor)
          .subscribe((data) => {});
      });
    });
  }
  //  ngOnInit() {
  // this.ionViewWillEnter();
  //  }
   ngOnInit() {
    this.storage.get("email").then((emailUser) => {
      this.emailLoguejat = emailUser;
      
      if (this.asistente.email == this.emailLoguejat) {
        this.botoSeguidor = true;
        this.dades.getSeguits(this.asistente.usuari_id).subscribe((data) => {
      
          this.seguits = data.json();
          this.storage.set("arraySeguitsSeguidors", this.seguits);
        });
      }
      this.storage.get("arraySeguitsSeguidors").then((arraySeguitsSeguidors) => {
        console.log(arraySeguitsSeguidors);
        for (let index in arraySeguitsSeguidors) {
    
          if (
            this.asistente.usuari_id == arraySeguitsSeguidors[index].seguit_id
          ) {
            
            this.botoFollowUnfollow = true;
          }else {
            this.botoFollowUnfollow = false;
          }
        }
      });
    });
  
  }
}