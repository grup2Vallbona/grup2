import { Injectable } from "@angular/core";

import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs";
import { Persona } from "../app/interfaces/ipersona";


import { Usuari } from "../app/interfaces/iusuari";

@Injectable()
export class DadesProductesService {
  // http: any;
  //David 'http://localhost/2DAW/M14/ProjecteFinal/grup2/server/public/index.php';
  //Albert 'http://localhost/WeSwing/grup2/server/public/index.php/api';
  //Nil 'http://localhost/M14/Projecte_Final/grup2/server/public/index.php';
  baseUrl: string = 'http://localhost/2DAW/M14/ProjecteFinal/grup2/server/public/index.php';
  constructor(private http: Http) { }


  public getPersona(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/persona/" + id);
  }

  public getEntitat(id: number): Observable<any> {
    return this.http.get(this.baseUrl + '/api/entitat/' + id);
  }

  public getUsuariEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + '/api/usuari/' + email)
  }
  public getTipusBalls(): Observable<any> {
    return this.http.get(this.baseUrl + '/api/tipusballs')
  }
  public crearPersona(persona: FormData): Observable<any> {
    // console.log(persona)
    // var personaJ = JSON.stringify(persona);
    // var headers = new Headers();
    // headers.append("Accept", 'application/json');
    // headers.append('Access-Control-Allow-Origin', '*');
    // const requestOptions = new RequestOptions({ headers: headers });
    return this.http.post(this.baseUrl + '/api/persona/', persona)
  }
  public getPersonaEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + '/api/email/' + email)
  }
  public crearUsuari(usuari: FormData): Observable<any> {
    return this.http.post(this.baseUrl + '/api/usuari/', usuari)
  }
  public getPremisUsuari (id:number): Observable<any>{
    return this.http.get(this.baseUrl + '/api/premis/usuari/'+id);
  }

  public crearEntitat (entitat: FormData): Observable<any>{
    return this.http.post(this.baseUrl + '/api/entitat', entitat);
  }

  public getPersonaUltima (): Observable<any>{
    return this.http.get(this.baseUrl + '/api/persona/ultima/');
  }

  public getEntitatUltima(): Observable<any>{
    return this.http.get(this.baseUrl + '/api/entitat/ultima/')
  }
}