import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { AlertController, IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth'; 


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { VistaEvento } from '../pages/vista-evento/vista-evento';
import { Register } from '../pages/register/register';
import { Principal } from '../pages/principal/principal';
import { RecuperarContra } from '../pages/recuperar-contra/recuperar-contra';
import { Eventos } from '../pages/eventos/eventos';
import { Evento } from '../pages/evento/evento';
import { Foro } from '../pages/foro/foro';
import { Valoraciones } from '../pages/valoraciones/valoraciones';
import { Novedades } from '../pages/novedades/novedades';
import {Seguits} from '../pages/seguits/seguits';
import { Movidas } from '../pages/movidas/movidas';
import { Perfil } from '../pages/perfil/perfil';
import { Asistentes } from '../pages/asistentes/asistentes';
import { Asistente } from '../pages/asistente/asistente';
import { Escuela } from '../pages/escuela/escuela';
import { EditUsuario } from '../pages/editarusuario/editusuario';
import { Grupo } from '../pages/grupo/grupo';
import { Creargrupo } from '../pages/creargrupo/creargrupo';
import { Crearevento } from '../pages/crearevento/crearevento';
import { Bloquejat } from '../pages/bloquejat/bloquejat'
import { Seguit } from '../pages/seguit/seguit';
import { DadesProductesService } from '../services/dades-productes.service';


import { GruposService } from '../services/grupos.services';
import { AuthProvider } from '../providers/auth/auth';

import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { Seguidors } from '../pages/seguidors/seguidors';
import { Bloquejats } from '../pages/bloquejats/bloquejats';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { GlobalProvider } from '../providers/global/global';
import { Seguidor } from '../pages/seguidor/seguidor';
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2zHm9yWRvsWVqm6YS93HUWtQOlGvcwJg",
    authDomain: "weswing-ffe0d.firebaseapp.com",
    databaseURL: "https://weswing-ffe0d-default-rtdb.firebaseio.com/",
    projectId: "weswing-ffe0d",
    storageBucket: "weswing-ffe0d.appspot.com",
    messagingSenderId: "98135874116",
  };
 
 
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register,
    Principal,
    Eventos,
    Evento,
    Foro,
    Valoraciones,
    Novedades,
    Movidas,
    Perfil,
    Asistentes,
    Asistente,
    Escuela,
    Grupo,
    Creargrupo,
    Crearevento,
    EditUsuario,
    RecuperarContra,
    Seguits,
    Seguidors,
    Bloquejats,
    VistaEvento,
    Bloquejat,
    Seguit,
    Seguidor
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
 
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    HttpModule,
    ReactiveFormsModule,
    
  

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    Principal,
    Eventos,
   Evento,
    Foro,
    Valoraciones,
    Novedades,
    Movidas,
    Perfil,
    Asistentes,
    Asistente,
    Escuela,
    Grupo,
    Creargrupo,
    Crearevento,
    EditUsuario,
    RecuperarContra,
    Seguits,
    Seguidors,
    Bloquejats,
    VistaEvento, 
    Bloquejat,
    Seguit,
    Seguidor
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    DadesProductesService,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, GruposService,
    AuthProvider,
    AlertController,
    GlobalProvider,
    
  
  ]
})
export class AppModule {}
