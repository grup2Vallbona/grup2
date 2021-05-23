import { Injectable } from "@angular/core";

import { Http, RequestOptions, Headers } from "@angular/http";

import { Observable } from "rxjs";
import { Persona } from "../app/interfaces/ipersona";

import { Usuari } from "../app/interfaces/iusuari";

@Injectable()
export class DadesProductesService {
  // http: any;
  urlDavid = 'http://localhost/2DAW/M14/ProjecteFinal/grup2/server/public/index.php';
  urlAlbert = 'http://localhost/WeSwing/grup2/server/public/index.php';
  urlNil = 'http://localhost/M14/Projecte_Final/grup2/server/public/index.php';
  urlServer = 'http://projecte.iescarlesvallbona.cat/~weswing_eq2/server/public/index.php'
  
  
  baseUrl: string = this.urlNil;




  constructor(private http: Http) {}
  
  //USUARI
  public getUsuari(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/usuariId/" + id);
  }
  public getUsuariEmail(email: string): Observable<any> {
     

    return this.http.get(this.baseUrl + "/api/usuari/" + email);
  }
  public createUsuari(usuari: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/usuari/", usuari);
  }
  public modifyUsuari(id: number, user: FormData) {
    return this.http.post(this.baseUrl + "/api/usuari/" + id, user);
  }

  //PERSONA
  public getPersona(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/persona/" + id);
  }
  public createPersona(persona: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/persona/", persona);
  }
  public modifyPersona(id: number, persona: FormData) {
    return this.http.post(this.baseUrl + "/api/persona/" + id, persona);
  }
  public getPersonaUltima(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/persona/ultima/");
  }
  public getPersonaEmail(email: string): Observable<any> {
    return this.http.get(this.baseUrl + "/api/email/" + email);
  }

  //ENTITAT
  public getEntitat(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/entitat/" + id);
  }
  public createEntitat(entitat: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/entitat", entitat);
  }
  public modifyEntitat(id: number, entitat: FormData) {
    return this.http.post(this.baseUrl + "/api/entitat/" + id, entitat);
  }
  public getEntitatUltima(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/entitats/ultima/");
  }

  //BLOQUEJAT
  public getBloquejats(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/bloquejat/" + id);
  }
  public getBloquejadors(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/bloquejador/" + id);
  }
  public bloquejar(bloquejar: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/bloquejar", bloquejar);
  }
  public deleteBloquejar(idseguit: number, idseguidor: number): Observable<any> {
    return this.http.delete(this.baseUrl + "/api/eliminarBloquejar/" + idseguit + "/" + idseguidor);
  }

  //SEGUIT
  public getSeguits(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/seguit/" + id);
  }
  public getSeguidors(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/seguidor/" + id);
  }
  public seguir(seguir: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/seguir", seguir);
  }
  public countSeguits(id: number): Observable<any>{
    return this.http.get(this.baseUrl + '/api/seguitscount/' + id);
  }
  public countSeguidors(id: number): Observable<any>{
    return this.http.get(this.baseUrl + '/api/seguidorscount/' + id);
  }
  public deleteSeguir(idseguit: number, idseguidor: number): Observable<any> {
    return this.http.delete(
      this.baseUrl + "/api/eliminarSeguir/" + idseguit + "/" + idseguidor
    );
  }

  //EVENTO
  public createEvent(event: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/event", event);
  }
  public createEventPremi(all: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/eventpremi", all);
  }
  public carregarEvents(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/events");
  }
  public getEventId(idEvent: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/event/" + idEvent);
  }

  //PREMIS
  public getPremisUsuari(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/premis/usuari/" + id);
  }
  public createPremi(premi: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/premi", premi);
  }
  public getPremi(premi: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/premi/" + premi);
  }
  public getPremiUltim(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/premis/ultim/");
  }

  //ASSISTENT
  public createAssistent(assistent: FormData): Observable<any> {
    return this.http.post(this.baseUrl + "/api/assistent/", assistent);
  }
  public deleteAssistent(
    idevent: number,
    idassistent: number
  ): Observable<any> {
    return this.http.delete(
      this.baseUrl + "/api/eliminarAssistent/" + idevent + "/" + idassistent
    );
  }
  public countAssistents(idevent: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/assistentscount/" + idevent);
  }
  public getAssistents(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/assistents");
  }
  public getAssistentsId(id: number): Observable<any> {
    return this.http.get(this.baseUrl + "/api/assistents/" + id);
  }

  //TIPUS BALLS
  public getTipusBalls(): Observable<any> {
    return this.http.get(this.baseUrl + "/api/tipusballs");
  }
}
