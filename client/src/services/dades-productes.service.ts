import { Injectable } from "@angular/core";

import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs";
import { Persona } from "../app/interfaces/ipersona";

import { Usuari } from "../app/interfaces/iusuari";

@Injectable()
export class DadesProductesService {
  // http: any;
  //David 'http://localhost/2DAW/M14/ProjecteFinal/grup2/server/public/index.php';
  //Albert 'http://localhost/WeSwing/grup2/server/public/index.php';
  //Nil 'http://localhost/M14/Projecte_Final/grup2/server/public/index.php';
  baseUrl: string =

    "http://localhost/WeSwing/grup2/server/public/index.php";

  constructor(private http: Http) {}

  public getUsuari(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/usuariId/" + id);
  }

  public getPersona(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/persona/" + id);
  }

  public getEntitat(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/entitat/" + id);
  }

  public getUsuariEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + "/api/usuari/" + email);
  }
  public getTipusBalls(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/tipusballs");
  }
  public crearPersona(persona: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/persona/", persona);
  }
  public getPersonaEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + "/api/email/" + email);
  }
  public crearUsuari(usuari: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/usuari/", usuari);
  }
  public getPremisUsuari(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/premis/usuari/" + id);
  }

  public crearEntitat(entitat: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/entitat", entitat);
  }

  public getPersonaUltima(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/persona/ultima/");
  }

  public getEntitatUltima(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/entitats/ultima/");
  }
  public modificarPersona(id: number, persona: FormData) {
    return this.http.post(this.baseUrl + "/api/persona/" + id, persona);
  }
  public modificarEntitat(id: number, entitat: FormData) {
    return this.http.post(this.baseUrl + "/api/entitat/" + id, entitat);
  }
  public modificarUsuari(id: number, user: FormData) {
    return this.http.post(this.baseUrl + "/api/usuari/" + id, user);
  }
  public crearPremi(premi: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/premi", premi);
  }
  public getPremi(premi: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/premi/"+ premi);
  }
  public getPremiUltim(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/premis/ultim/");
  }
  public crearEvent(event: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/event", event);
  }
  public crearEventPremi(all: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/eventpremi", all);
  }
  public carregarEvents(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/events");
  }

  public getSeguits(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/seguit/" + id);
  }
  
  public getSeguidors(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/seguidor/" + id);
  }
  public getBloquejats(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/bloquejat/" + id);
  }
  public getAssistents(): Observable<any>{
    return this.http.get(this.baseUrl + '/api/assistents')
  }
  public getAssistentsId(id: number): Observable<any>{
    return this.http.get(this.baseUrl + '/api/assistents/' + id)
  }

  public seguir(seguir: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/seguir/" , seguir);
  }
  public deixarSeguir(idseguit: number, idseguidor: number):Observable<any>{
    return this.http.delete(this.baseUrl + "/api/eliminarSeguir/" + idseguit + "/" + idseguidor);
  }
}
