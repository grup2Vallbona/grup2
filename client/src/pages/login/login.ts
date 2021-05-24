import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { Principal } from '../principal/principal';
import { RecuperarContra } from '../recuperar-contra/recuperar-contra';
import { ToastController, AlertController } from 'ionic-angular';
import { Novedades } from '../novedades/novedades';


/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class Login {
  email: string;
  password: string;
  user: Observable<firebase.User>;
  items: FirebaseListObservable<any[]>;
  msgVal: string = '';
  alertController: any;
butons: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public toastCtrl: ToastController, public alertCtrl:AlertController) {
    this.user = this.afAuth.authState;
  }

  ionViewDidLoad() {
   
  }
  contraseñaIncorrecta() {
    let alert = this.alertCtrl.create({
      title: 'Usuario o contraseña incorrecta',

      buttons: ['Aceptar']
      
    
    });
   
   
    alert.present();
  }
  recuperarContra(){
    this.navCtrl.push(RecuperarContra);
  }
  login() {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(r => this.navCtrl.push(Principal,{email:this.email}))
        .catch(e => {
          
          this.contraseñaIncorrecta();
    
        })


      //  if (this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)) {

      //    this.navCtrl.push(Principal);

      //  }
    } catch (e) {
  
    }

  }

  logout() {
    this.afAuth.auth.signOut();
  }

 

  //  loginToast() {
  //   let toast = this.toastCtrl.create({
  //     message: 'Your email or password is wrong',
  //     duration: 3000
  //   });
  //   toast.present();
  // }

}
