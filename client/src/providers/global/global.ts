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
  constructor(public http: Http) {
    console.log('Hello GlobalProvider Provider');
  }

  setEmail(email){
    this.email = email;
  }
  getEmail(){
    return this.email;
  }
}
