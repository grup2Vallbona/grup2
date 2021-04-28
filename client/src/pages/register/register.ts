import { Component } from '@angular/core';
import { Checkbox, IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { Principal } from '../principal/principal';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';
import { ToastController } from 'ionic-angular';

import { Camera } from 'ionic-native';
import { Http } from '@angular/http';
import { DadesProductesService } from '../../services/dades-productes.service';

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
  paises = [];
  private imageSrc: string;
  users: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  itemObservable = this.db.list('/users');
  email: string;
  password: string;
  nickname: string;
  genero: string;
  idioma: string;
  pais: string;
  rol: string;
  alertCtrl: any;
  descripcion: string;
  vacuna: boolean = false;
  persona: boolean = true;
  entitat: boolean = false;
  escola: boolean = false;
  marca: boolean = false;
  especialidadesProfessor: string;
  instrumento: string;
  profesor: number;
  professorToggle: boolean = false;
  music: number;
  musicToggle: boolean = false;
  ballari: number;
  ballariToggle: boolean = true;
  dataNaixement: Date;
  iniciImparticions: Date;
  imatge: string;
  anyEmpezarBailar: Date;
  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseAuth: AngularFireAuth, public toastCtrl: ToastController, public db: AngularFireDatabase, private http: Http, private dades: DadesProductesService) {
    this.user = firebaseAuth.authState;
  }

  signupPersona(email: string, password: string, nickname: string, genero: number, idioma: number, pais: number, rol: string,
    descripcion: string, vacuna: number, especialidadesProfessor: string, instrumento: string, dataNaixement: Date, professorToggle: boolean, musicToggle: boolean, ballariToggle: boolean
    , iniciImparticions: Date, imatge: string, anyEmpezarBailar:Date) {

    let user = {
      email: email,
      contrasenya: password,
      nickname: nickname,
      genere: genero,
      idioma: idioma,
      pais: pais,
      rol: rol,
      descripcio: descripcion,
      vacunaCovid: vacuna,
      imagen: imatge,
      ballari: ballariToggle,
      music: musicToggle,
      professor:  professorToggle,
      especialitatsProfessor: especialidadesProfessor,
      instrument: instrumento,
      dataNaixementBallari: anyEmpezarBailar,
      iniciProfessorat: iniciImparticions,
      dataNaixement: dataNaixement,
      id: 0,
      persona_id: 0,
      entitat_id: 0
    }
  if (professorToggle) {
      this.profesor = 1;
    } else {
      this.profesor = 0;
    };
    if (musicToggle) {
      this.music = 1;
    } else {
      this.music = 0;
    };
    if (ballariToggle) {
      this.ballari = 1;
    } else {
      this.ballari = 0;
    };
   console.log(user);
    try {
      this.firebaseAuth
        .auth
        .createUserWithEmailAndPassword(email, password)
      this.itemObservable.push({ user });
      this.dades.crearUsuari(user).subscribe(usuario => {
        console.log(usuario);
      });
      this.navCtrl.push(Principal);
    } catch (e) {
      this.loginToast();
    }
    // console.log(user);
  }

  signupEntitat() {

  }
  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'El email ja esta en us',
      // subTitle: '10% of battery remaining',
      buttons: ['Aceptar']
    });
    alert.present();
  }
  // signup(email: string, password: string, nickname: string, genero: string, idioma: string, pais: string, ciudad: string, rol: string) {
  // this.firebaseAuth.auth.createUserWithEmailAndPassword(this.email, this.password).then(r => this.navCtrl.push(Principal))
  // .catch(e=>{
  //   if (e['code'] == 'auth/invalid-email-verified') {
  //     console.log("burro")
  //     // this.presentAlert();
  //   }
  // })
  // // this.itemObservable.push({email: email, nickname: nickname, genero: genero, idioma: idioma, pais: pais, ciudad: ciudad, rol: rol})
  // }

  loginToast() {
    let toast = this.toastCtrl.create({
      message: 'Email and password are required fields',
      duration: 3000
    });
    toast.present();
  }

  openGallery(): void {
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

  verificacionCheckbox(e) {
    if (e == "persona") {
      if (this.persona) {
        this.entitat = false;
      } else {
        this.entitat = true;
      }
    } else {
      if (this.entitat) {
        this.persona = false;
      } else {
        this.persona = true;
      }
    }
  }

  verficacioEntitat(e) {
    if (e == "escola") {
      if (this.escola) {
        this.marca = false;
      } else {
        this.marca = true;
      }
    } else {
      if (this.marca) {
        this.escola = false;
      } else {
        this.escola = true;
      }
    }
  }
  ionViewDidLoad() {
    this.http.get('../../assets/json/paises.json').subscribe(
      (response: any) => {
        // alert(response);
        this.paises = response.json();
      }, error => {
        console.log('Error: ', error.message);
      }
    )
  }

}
