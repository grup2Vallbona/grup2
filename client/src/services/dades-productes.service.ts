import { Injectable } from "@angular/core";

import { Http } from "@angular/http";

import { Observable } from "rxjs";

import { Usuari } from "../app/interfaces/iusuari";

@Injectable()
export class DadesProductesService {
  // http: any;
  //David 'http://localhost/2DAW/M14/ProjecteFinal/grup2/server/public/index.php';
  //Albert 'http://localhost/WeSwing/grup2/server/public/index.php';
  baseUrl: string = 'http://localhost/WeSwing/grup2/server/public/index.php';
  constructor(private http: Http) {}

  public getDades(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/usuari/" + id);
  }


public getPersona(id: number): Observable<any>{
  return this.http.get(this.baseUrl + "/api/persona/" + id);
}

public getEntitat(id: number): Observable<any>{
  return this.http.get(this.baseUrl + '/api/entitat/' + id);
}

  public getUsuariEmail (email: string): Observable<any>{
    return this.http.get(this.baseUrl + '/api/usuari/' + email)
  }
  public getTipusBalls (): Observable<any>{
    return this.http.get(this.baseUrl + '/api/tipusballs')
  }
  public getPremisUsuari (id:number): Observable<any>{
    return this.http.get(this.baseUrl + '/api/premis/usuari/'+id);
  }




}