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
import { Http, Headers, RequestOptions } from '@angular/http';
import { DadesProductesService } from '../../services/dades-productes.service';
import { Persona } from '../../app/interfaces/ipersona';

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
  personaJ: string;
  paises = [];
  persona: Persona;
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
  rol: any;
  alertCtrl: any;
  descripcion: string;
  vacuna: boolean = false;
  personaToggle: boolean = true;
  entitatToggle: boolean = false;
  escola: boolean = false;
  marca: boolean = false;
  especialidadesProfessor: any;
  instrumento: any;
  profesor: any;
  professorToggle: boolean = false;
  music: any;
  musicToggle: boolean = false;
  ballari: any;
  ballariToggle: boolean = true;
  dataNaixement: Date;
  iniciImparticions: any;
  imatge: string;
  anyEmpezarBailar: any;
  myForm: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseAuth: AngularFireAuth, public toastCtrl: ToastController, public db: AngularFireDatabase, private http: Http, private dades: DadesProductesService) {
    this.user = firebaseAuth.authState;
  }

  signupPersona(email, password, nickname, genero, idioma, pais, rol, descripcion, vacuna, especialidadesProfessor, instrumento, dataNaixement, professorToggle, musicToggle, ballariToggle, iniciImparticions, imatge, anyEmpezarBailar) {
    if (professorToggle) {
      this.profesor = 1;
    } else {
      this.profesor = 0;
    }
    if (musicToggle) {
      this.music = 1;
    } else {
      this.music = 0;
    }
    if (ballariToggle) {
      this.ballari = 1;
    } else {
      this.ballari = 0;
    }

    this.persona = {
      rol: rol,
      ballari: this.ballari,
      music: this.music,
      professor: this.profesor,
      especialitatsProfessor: especialidadesProfessor,
      instrument: instrumento,
      dataNaixementBallari: anyEmpezarBailar,
      iniciProfessorat: iniciImparticions,
      id: 0,
    }
    this.personaJ = JSON.stringify(this.persona)
    console.log(this.personaJ);
    // let user = {
    //   email: email,
    //   contrasenya: password,
    //   nickname: nickname,
    //   genere: genero,
    //   idioma: idioma,
    //   pais: pais,
    //   rol: rol,
    //   descripcio: descripcion,
    //   vacunaCovid: vacuna,
    //   imagen: imatge,
    //   ballari: ballariToggle,
    //   music: musicToggle,
    //   professor:  professorToggle,
    //   especialitatsProfessor: especialidadesProfessor,
    //   instrument: instrumento,
    //   dataNaixementBallari: anyEmpezarBailar,
    //   iniciProfessorat: iniciImparticions,
    //   dataNaixement: dataNaixement,
    //   id: 0,
    //   persona_id: 0,
    //   entitat_id: null
    // }

    const formData = new FormData();
    formData.append("rol", rol);
    formData.append("ballari", this.ballari);
    formData.append("music", this.music);
    formData.append("professor", this.profesor);
    formData.append("especialitatsProfessor", especialidadesProfessor);
    formData.append("instrument", instrumento);
    formData.append("dataNaixementBallari", dataNaixement);
    formData.append("iniciProfessorat", iniciImparticions);



    //  console.log(user);
    try {
      this.dades.crearPersona(formData).subscribe(data => {
        // console.log(data);
      });

      // this.firebaseAuth
      //   .auth
      //   .createUserWithEmailAndPassword(email, password)
      // this.itemObservable.push({ persona });
      // this.dades.crearPersona(persona).subscribe(usuario => {
      //   console.log(usuario);
      // });
      // this.navCtrl.push(Principal);
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
        this.entitatToggle = false;
      } else {
        this.entitatToggle = true;
      }
    } else {
      if (this.entitatToggle) {
        this.personaToggle = false;
      } else {
        this.personaToggle = true;
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
