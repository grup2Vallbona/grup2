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
      var eventos = eventsJ.json();
      console.log(eventos);
      this.html="";
      for (let index = 0; index < eventos.length; index++) {
        //this.events[index]=eventos[index];
        this.html +='<ion-card class="card card-ios">'+
                      '<ion-item class="item item-block item-ios">'+
                       '<ion-avatar item-left>'+
                         '<img src="./assets/images/foto1.jpg">'+
                      '</ion-avatar>'+
                      '<div class="item-inner">'+
                        '<div class="input-wrapper>"'+
                          '<ion-label class="label label-ios">'+
                            '<p>'+eventos[index].titol+'</p>'+
                            '<p>17 June, 19:30 London</p>'+
                            '<p>124 people interested</p>'+
                          '<ion-label>'+
                        '</div>'+
                      '</div>'+
                      '</ion-item>'+
                    '</ion-card>';
      }
      document.getElementById('body').innerHTML=this.html;
      

      // console.log(eventos);
      // this.html="";
      // for (let index = 0; index < eventos.length; index++) {
      //   //this.events[index]=eventos[index];
      //   this.html +='<ion-card class="card card-ios">'+
      //                 '<ion-item class="item item-block item-ios">'+
      //                  '<ion-avatar item-left>'+
      //                    '<img src="./assets/images/foto1.jpg">'+
      //                 '</ion-avatar>'+
      //                 '<div class="item-inner">'+
      //                   '<div class="input-wrapper>"'+
      //                     '<ion-label class="label label-ios">'+
      //                       '<p>'+eventos.titol+'</p>'+
      //                       '<p>17 June, 19:30 London</p>'+
      //                       '<p>124 people interested</p>'+
      //                     '<ion-label>'+
      //                   '</div>'+
      //                 '</div>'+
      //                 '</ion-item>'+
      //               '</ion-card>';
      // }
      // document.getElementById('body').innerHTML=this.html;
      this.eventos = [{titol:"pepe"},{titol:"hola"}];
    // });
  }
  crearEvento(){
    this.navCtrl.push(Crearevento);
  }
}
