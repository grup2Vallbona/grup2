import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';


import { Login } from '../login/login';
import { Register } from '../register/register';
import { Principal } from '../principal/principal';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {

  }



   gotoLogin() {
     this.navCtrl.push(Login);

  }

  gotoRegister() {
     this.navCtrl.push(Register);

  }

  loginFacebook() {
    try{
      if (this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())) {
          this.navCtrl.push(Principal);
      }
    }catch(e){
      console.log("Error");
    }


  }

}
