import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';



import { AngularFireModule } from 'angularfire2';

// New imports to update based on AngularFire2 version 4
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { Register } from '../pages/register/register';
import { Principal } from '../pages/principal/principal';

import { Eventos } from '../pages/eventos/eventos';
import { Foro } from '../pages/foro/foro';
import { Valoraciones } from '../pages/valoraciones/valoraciones';
import { Novedades } from '../pages/novedades/novedades';

import { Movidas } from '../pages/movidas/movidas';
import { Usuario } from '../pages/usuario/usuario';
import { Asistentes } from '../pages/asistentes/asistentes';
import { Escuela } from '../pages/escuela/escuela';

import { Grupo } from '../pages/grupo/grupo';
import { Creargrupo } from '../pages/creargrupo/creargrupo';
import { Crearevento } from '../pages/crearevento/crearevento';




import { GruposService } from '../services/grupos.services';
import { AuthProvider } from '../providers/auth/auth';



  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD2zHm9yWRvsWVqm6YS93HUWtQOlGvcwJg",
    authDomain: "weswing-ffe0d.firebaseapp.com",
    databaseURL: "https://weswing-ffe0d-default-rtdb.firebaseio.com/",
    projectId: "weswing-ffe0d",
    storageBucket: "weswing-ffe0d.appspot.com",
    messagingSenderId: "98135874116",
  };
 
  // var firebaseConfig = {
  //   apiKey: "AIzaSyD2zHm9yWRvsWVqm6YS93HUWtQOlGvcwJg",
  //   authDomain: "weswing-ffe0d.firebaseapp.com",
  //   projectId: "weswing-ffe0d",
  //   storageBucket: "weswing-ffe0d.appspot.com",
  //   messagingSenderId: "98135874116",
  //   appId: "1:98135874116:web:acf776d9f3dea79943fa11",
  //   measurementId: "G-W27Z7TDGD0"
  // };



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login,
    Register,
    Principal,
    Eventos,
    Foro,
    Valoraciones,
    Novedades,
    Movidas,
    Usuario,
    Asistentes,
    Escuela,
    Grupo,
    Creargrupo,
    Crearevento
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login,
    Register,
    Principal,
    Eventos,
    Foro,
    Valoraciones,
    Novedades,
    Movidas,
    Usuario,
    Asistentes,
    Escuela,
    Grupo,
    Creargrupo,
    Crearevento
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, GruposService,
    AuthProvider
  ]
})
export class AppModule {}
