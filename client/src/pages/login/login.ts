import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';
import { Principal } from '../principal/principal';

import { ToastController, AlertController } from 'ionic-angular';
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


  constructor(public navCtrl: NavController, public navParams: NavParams, public afAuth: AngularFireAuth, public toastCtrl: ToastController, public alertCtrl:AlertController) {
    this.user = this.afAuth.authState;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Login');
  }
  contraseñaIncorrecta() {
    let alert = this.alertCtrl.create({
      title: 'Contraseña incorrecta',
      // subTitle: '10% of battery remaining',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  emailIncorrecto() {
    let alert = this.alertCtrl.create({
      title: 'email incorrecto',
      // subTitle: '10% of battery remaining',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  emailNoExistente() {
    let alert = this.alertCtrl.create({
      title: 'email no existe',
      // subTitle: '10% of battery remaining',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  login() {
    try {
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)
        .then(r => this.navCtrl.push(Principal))
        .catch(e => {
          if (e['code'] == 'auth/wrong-password') {
            // console.log(this.contraseñaIncorrecta())
         this.contraseñaIncorrecta();
          } 
          if (e['code'] == 'auth/invalid-email') {
            this.emailIncorrecto();
          }
          if (e['code'] ==  'auth/invalid-email-verified') {
            // this.emailNoExistente();
            console.log('olaa');
          }
        })

      //  if (this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)) {

      //    this.navCtrl.push(Principal);

      //  }
    } catch (e) {
      //  this.loginToast();
      console.log(e)
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
