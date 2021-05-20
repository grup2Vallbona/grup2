import { Component } from '@angular/core';
import { NavController, NavParams } from "@ionic/angular";


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
  // picture: any;
  // name: any;
  // email: any;
  
 
  constructor(public navCtrl: NavController, public afAuth: AngularFireAuth) {

  }
  
  // loginGoogle() {
  //   console.log('Login con google') ;
  // }
  async loginGoogle() {
    try{
      if (this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())) {
          this.navCtrl.push(Principal);
      } else {
        this.navCtrl.push(HomePage);
      }
    }catch(e){
      console.log("Error");
    }


  }
    // console.log(user);
    // this.picture = user.photoURL;
    // this.name = user.displayName;
    // this.email = user.email;
 
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
