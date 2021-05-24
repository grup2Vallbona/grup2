import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { DadesProductesService } from '../../services/dades-productes.service';
import { VistaEvento } from '../vista-evento/vista-evento'
/**
 * Generated class for the EventoComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'page-evento',
  templateUrl: 'evento.html'
})
export class Evento {
 @Input() evento;
   

  constructor(public navCtrl: NavController, public navParams: NavParams,private dades: DadesProductesService) {
    
  }
  vistaEvento(){
    this.navCtrl.push(VistaEvento,{evento:this.evento});
  }

  
}
