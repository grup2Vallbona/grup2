import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import { Observable } from "rxjs";


import { Usuari } from "../app/interfaces/iusuari";

@Injectable()
export class DadesProductesService {
  // http: any;
  //David 'https://localhost/2DAW/M14/weswing/grup2/server/public/index.php';
  //Albert 'http://localhost/WeSwing/grup2/server/public/index.php/api';
  //Nil 'http://localhost/M14/Projecte_Final/grup2/server/public/index.php';
  baseUrl: string = 'http://localhost/M14/Projecte_Final/grup2/server/public/index.php';
  constructor(private http: Http) { }

  public getDades(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/usuari/" + id);
  }


  public getPersona(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/persona/" + id);
  }

  public getEntitat(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/api/entitat/' + id);
  }

  public getUsuariEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + '/api/email/' + email)
  }
  public getTipusBalls(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/tipusballs')
  }
  public crearPersona(usuari: Usuari): Observable<any> {
    return this.http.put(this.baseUrl + '/api/persona/', {user:usuari})
  }
  public getPersonaEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + '/api/email/' + email)
  }
  public crearUsuari(usuari: Usuari): Observable<any> {
    return this.http.post(this.baseUrl + '/api/usuari/', {user:usuari})
  }

 
}