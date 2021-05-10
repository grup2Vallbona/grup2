import { Component } from "@angular/core";
import {
  AlertController,
  IonicPage,
  NavController,
  NavParams,
} from "ionic-angular";
import { HomePage } from "../home/home";
import { AngularFireAuth } from "angularfire2/auth";
import {
  AngularFireDatabase,
  FirebaseListObservable,
} from "angularfire2/database";
import * as firebase from "firebase/app";

import { Observable } from "rxjs/Observable";
import { ToastController } from "ionic-angular";

import { Camera } from "ionic-native";
import { Http } from "@angular/http";
import { DadesProductesService } from "../../services/dades-productes.service";
import { Persona } from "../../app/interfaces/ipersona";
import { Entitat } from "../../app/interfaces/ientitat";
// import { FormGroup } from "@angular/forms";

//import { FormControl, Validators} from "@angular/forms";
/**
 * Generated class for the Register page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: "page-register",
  templateUrl: "register.html",
})
export class Register {
  // usuarios = new FormGroup({
  //   nickname: new FormControl('', [Validators.requiredTrue]),

  // });
  //  usuarios: FormGroup;
  miModelo: any;
  //  paises: Pais[];
  personaJ: string;
  paises = [];
  persona: Persona;
  personUltima: Persona;
  private imageSrc: string;
  users: FirebaseListObservable<any[]>;
  user: Observable<firebase.User>;
  itemObservable = this.db.list("/users");
  email: string;
  password: string;
  nickname: string;
  genero: string;
  idioma: string;
  pais: string;
  rol: any;
  // alertCtrl: any;
  descripcion: string;
  vacunaToggle: boolean = false;
  vacuna: any;
  personaToggle: boolean = true;
  entitatToggle: boolean = false;
  escolaToggle: boolean = true;
  marcaToggle: boolean = false;
  escola: any;
  marca: any;
  instrumento: any;
  profesor: any;
  professorToggle: boolean = false;
  music: any;
  musicToggle: boolean = false;
  ballari: any;
  ballariToggle: boolean = true;
  dataNaixement: any;
  iniciImparticions: any;
  imatge: string;
  anyEmpezarBailar: any;
  nombre: any;
  alertController: any;
  entitatIdUltima: any;
  entitatUsuari: Entitat;
  required: boolean = true;
  locationWatchStarted: boolean;
  locationSubscription: any;
  locationTrace = [];
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private firebaseAuth: AngularFireAuth,
    public toastCtrl: ToastController,
    public db: AngularFireDatabase,
    private http: Http,
    private dades: DadesProductesService,
    public alertCtrl: AlertController
  ) {
    this.user = firebaseAuth.authState;
  }

  // signUp(
  //   email,
  //   password,
  //   nickname,
  //   genero,
  //   idioma,
  //   pais,
  //   rol,
  //   descripcion,
  //   vacunaToggle,
  //   instrumento,
  //   dataNaixement,
  //   professorToggle,
  //   musicToggle,
  //   ballariToggle,
  //   iniciImparticions,
  //   imatge,
  //   anyEmpezarBailar,
  //   escolaToggle,
  //   marcaToggle,
  //   nombre,
  //   personaToggle
  //   ){
  //      console.log(this.usuarios.value.nickname);
  //   for (let index = 0; index < this.usuarios; index++) {
  //     console.log(this.usuarios[index].nickname);

  //   }
  // }
  signupPersona(
    email,
    password,
    nickname,
    genero,
    idioma,
    pais,
    rol,
    descripcion,
    vacunaToggle,
    instrumento,
    dataNaixement,
    professorToggle,
    musicToggle,
    ballariToggle,
    iniciImparticions,
    imatge,
    anyEmpezarBailar
  ) {


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

    if (vacunaToggle) {
      this.vacuna = 1;
    } else {
      this.vacuna = 0;
    }

    if (iniciImparticions == undefined) {
      iniciImparticions = "1800-01-01";
    }

    const formData = new FormData();
    formData.append("rol", rol);
    formData.append("ballari", this.ballari);
    formData.append("music", this.music);
    formData.append("professor", this.profesor);
    formData.append("instrument", instrumento);
    formData.append("dataNaixementBallari", anyEmpezarBailar);
    formData.append("iniciProfessorat", iniciImparticions);

    try {
      this.firebaseAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then((r) => this.itemObservable.push(formData))
        .then((r) =>
          this.dades.crearPersona(formData).subscribe((data) => {
            this.dades.getPersonaUltima().subscribe((personaUltimaJson) => {
              this.personUltima = personaUltimaJson.json();
              const formDataUsuari = new FormData();
              formDataUsuari.append("persona_id", this.personUltima.id);
              formDataUsuari.append("genere", genero);
              formDataUsuari.append("email", email);
              formDataUsuari.append("contrasenya", password);
              formDataUsuari.append("pais", pais);
              formDataUsuari.append("dataNaixement", dataNaixement);
              formDataUsuari.append("nickname", nickname);
              formDataUsuari.append("idioma", idioma);
              formDataUsuari.append("descripcio", descripcion);
              formDataUsuari.append("vacunaCovid", this.vacuna);
              formDataUsuari.append("imagen", imatge);
              this.dades.crearUsuari(formDataUsuari).subscribe((data) => {
                this.navCtrl.push(HomePage);
              });
            });
          })
        );
    } catch (e) {
      alert(e);
      this.registreIncorrecte();
      // if (e["code"] == "auth/email-already-exists") {
      //   this.registreIncorrecte();
      // }
    }
  }
  registreIncorrecte() {
    let alert = this.alertCtrl.create({
      title: "Registre Incorrecte",

      buttons: ["Aceptar"],
    });
    alert.present();
  }
  signupEntitat(
    email,
    password,
    nickname,
    dataNaixement,
    descripcion,
    imatge,
    idioma,
    pais,
    vacunaToggle,
    escolaToggle,
    marcaToggle,
    nombre,
    genero
  ) {
    if (escolaToggle) {
      this.escola = 1;
    } else {
      this.escola = 0;
    }
    if (marcaToggle) {
      this.marca = 1;
    } else {
      this.marca = 0;
    }

    if (vacunaToggle) {
      this.vacuna = 1;
    } else {
      this.vacuna = 0;
    }

    const formDataEntidad = new FormData();
    formDataEntidad.append("escola", this.escola);
    formDataEntidad.append("marca", this.marca);
    formDataEntidad.append("nom", nombre);

    try {
      this.firebaseAuth.auth
        .createUserWithEmailAndPassword(email, password)
        .then((r) => this.itemObservable.push(formDataEntidad))
        .then((r) =>
          this.dades.crearEntitat(formDataEntidad).subscribe((dataEntitat) => {
            this.dades.getEntitatUltima().subscribe((entitatUltimaJson) => {
              this.entitatUsuari = entitatUltimaJson.json();
              this.entitatIdUltima = this.entitatUsuari.id;
              const formDataEntitatUsuari = new FormData();
              formDataEntitatUsuari.append("entitat_id", this.entitatIdUltima);
              formDataEntitatUsuari.append("email", email);
              formDataEntitatUsuari.append("contrasenya", password);
              formDataEntitatUsuari.append("genere", genero);
              formDataEntitatUsuari.append("pais", pais);
              formDataEntitatUsuari.append("dataNaixement", dataNaixement);
              formDataEntitatUsuari.append("nickname", nickname);
              formDataEntitatUsuari.append("idioma", idioma);
              formDataEntitatUsuari.append("descripcio", descripcion);
              formDataEntitatUsuari.append("vacunaCovid", this.vacuna);
              formDataEntitatUsuari.append("imagen", imatge);

              this.dades
                .crearUsuari(formDataEntitatUsuari)
                .subscribe((dataUsuariEntitat) => {
                  this.navCtrl.push(HomePage);
                });
            });
          })
        );
    } catch (e) {
      console.log(e);
      this.registreIncorrecte();
      // if (e["code"] == "auth/email-already-exists") {
      //   this.registreIncorrecte();
      // }
    }
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: "El email ja esta en us",
      // subTitle: '10% of battery remaining',
      buttons: ["Aceptar"],
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
      message: "Email and password are required fields",
      duration: 3000,
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
      correctOrientation: true,
    };

    Camera.getPicture(cameraOptions).then(
      (file_uri) => (this.imageSrc = file_uri),
      (err) => console.log(err)
    );
  }

  verificacionCheckbox(e) {
    if (e == "persona") {
      if (this.personaToggle) {
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
      if (this.escolaToggle) {
        this.marcaToggle = false;
      } else {
        this.marcaToggle = true;
      }
    } else {
      if (this.marcaToggle) {
        this.escolaToggle = false;
      } else {
        this.escolaToggle = true;
      }
    }
  }
  // createForm() {
  //   this.nickname = new FormControl('Dayana', Validators.required)
  // }
  ionViewDidLoad() {
    // this.createForm();
    this.http.get("../../assets/json/paises.json").subscribe(
      (response: any) => {
        // alert(response);
        this.paises = response.json();
      },
      (error) => {
        console.log("Error: ", error.message);
      }
    );
  }
}
