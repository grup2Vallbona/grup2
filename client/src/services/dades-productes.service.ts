import { Injectable } from "@angular/core";

import { Http } from "@angular/http";
import { AngularFireAuth } from "angularfire2/auth";
import { Observable } from "rxjs";
import { IProducte } from "../app/interfaces/iproducte";
import { IUsuari } from "../app/interfaces/iusuari";

@Injectable()
export class DadesProductesService {
  // http: any;
  baseUrl1: string = 'http://localhost/2DAW/Pt3_Api_CampsDavid/Pt3/public/index.php';
  baseUrl: string =
    "http://localhost/2DAW/M7/UF4/examen_uf4/server/public/index.php";

  constructor(private afAuth: AngularFireAuth, private http: Http) {}

  public getUsuario(id): Observable<any> {
    return this.http.get(this.baseUrl + "/api/usuari/" + id);
  }

  public getDades(): Observable<any> {
    return this.http.get(this.baseUrl1 + "/api/producte/110");
  }

  public getUsuarioAuth() {
    return this.afAuth.auth;
  }
}