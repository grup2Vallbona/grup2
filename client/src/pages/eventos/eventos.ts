import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Evento } from '../evento/evento'
import { Movidas } from '../movidas/movidas';
import { Crearevento } from '../crearevento/crearevento';
import { DadesProductesService } from '../../services/dades-productes.service';




/**
 * Generated class for the Eventos page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class Eventos {
 generic: string = "todos";
 eventos = [];
 html = '';
  constructor(public navCtrl: NavController, public navParams: NavParams,private dades: DadesProductesService) {
    
  }


  ionViewWillEnter(){
    this.carrgarEventos();
  }
 
  carrgarEventos(){
    this.dades.carregarEvents().subscribe((eventsJ: any) => {
       this.eventos = eventsJ.json();
     
   });

  }
  crearEvento(){
    this.navCtrl.push(Crearevento);
  }
}



