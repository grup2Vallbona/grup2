import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DadesProductesService } from '../../services/dades-productes.service';
import { Storage } from "@ionic/storage";
/**
 * Generated class for the VistaEventoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'vista-evento',
  templateUrl: 'vista-evento.html'
})
export class VistaEvento {
  usuari
  nickname:string="";
  persona_id;
  evento;
  text: string;
  tuEvento:boolean=false;
  constructor(public navCtrl: NavController, public navParams: NavParams,private dades: DadesProductesService,private storage: Storage) {
    this.evento = navParams.get("evento");
    
  }
  editEvento(){
    
    if(this.evento.usuari_id==this.persona_id){
      this.tuEvento=true;
    }
    
  }
  gotoEditEvento(){
   // this.navCtrl.push();
  }
  ionViewWillEnter(){
    this.storage.get("email").then((emailUser) => {
      this.dades.getUsuariEmail(emailUser).subscribe((jUsuario: any) => {
        this.usuari = jUsuario.json();
        console.log(this.usuari);
        this.persona_id = this.usuari.id;
        this.nickname = this.usuari.nickname
        this.editEvento();
        console.log(this.usuari);
      });
    });
    
  }
}

