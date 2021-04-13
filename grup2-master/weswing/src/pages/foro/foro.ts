import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Grupo } from '../grupo/grupo';
import { Creargrupo } from '../creargrupo/creargrupo';

import { GruposService } from '../../services/grupos.services';

/**
 * Generated class for the Foro page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-foro',
  templateUrl: 'foro.html',
})
export class Foro {
 generic: string = "general";
 grupos: {title: string}[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private grupoService: GruposService) {

  }

  ionViewWillEnter(){
    this.grupos = this.grupoService.getGrupos();
  }

  gotoGrupo(){
    this.navCtrl.push(Grupo);
  }

  gotoCrearGrupo(){
    this.navCtrl.push(Creargrupo);
  }



}
