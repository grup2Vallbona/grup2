import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the GlobalProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class GlobalProvider {

  email:string="";
  arraySeguitsSeguidors= [];
  arrayBloquejats= [];
  arrayBloquejadors=[];
  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
  }

  setEmail(email){
    this.email = email;
  }
  getEmail(){
    return this.email;
  }

  setSeguitSeguidor(arraySeguitsSeguidors){
    this.arraySeguitsSeguidors = arraySeguitsSeguidors;
  }
  getSeguitSeguidor(){
    return this.arraySeguitsSeguidors;
  }
  setBloquejats(arrayBloquejats){
    this.arrayBloquejats = arrayBloquejats;
  }
  getBloquejats(){
    return this.arrayBloquejats;
  }
  setBloquejador(arrayBloquejadors){
    this.arrayBloquejadors = arrayBloquejadors;
  }
  getBloquejador(){
    return this.arrayBloquejadors;
  }
  
}
