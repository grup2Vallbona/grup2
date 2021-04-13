import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Principal } from '../principal/principal';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

import { Camera } from 'ionic-native';

/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class Register {
  private imageSrc: string;
  users: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  itemObservable = this.db.list('/users');


  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseAuth: AngularFireAuth, public toastCtrl: ToastController, public db: AngularFireDatabase) {
  this.user = firebaseAuth.authState;
  }

  signup(email: string, password: string, nombre: string, sexo: string, idioma: string, pais: string, ciudad: string, rol: string) {
    try{
    this.firebaseAuth
      .auth
      .createUserWithEmailAndPassword(email, password)
        this.itemObservable.push({ email: email, nombre: nombre, sexo: sexo, idioma: idioma, pais: pais, ciudad: ciudad, rol: rol});
        this.navCtrl.push(Principal);
      }catch(e){
        this.loginToast();
      }
  }




   loginToast() {
    let toast = this.toastCtrl.create({
      message: 'Email and password are required fields',
      duration: 3000
    });
    toast.present();
  }

private openGallery (): void {
  let cameraOptions = {
    sourceType: Camera.PictureSourceType.PHOTOLIBRARY,
    destinationType: Camera.DestinationType.FILE_URI,
    quality: 100,
    targetWidth: 1000,
    targetHeight: 1000,
    encodingType: Camera.EncodingType.JPEG,
    correctOrientation: true
  }

  Camera.getPicture(cameraOptions)
    .then(file_uri => this.imageSrc = file_uri,
    err => console.log(err));
}



}
