import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFireAuth } from "angularfire2/auth";
import {ChatPage} from "../chat/chat";

/**
 * Generated class for the SigninPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signin',
  templateUrl: 'signin.html',
})
export class SigninPage {

  @ViewChild('email') email;
  @ViewChild('password') password;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public alertCtrl: AlertController,
              private fireAuth: AngularFireAuth) {
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad SigninPage');
  }

  signInUser() {
    this.fireAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.showAlert("Success", "You're logged in.");

        this.navCtrl.push(ChatPage, {
          userName: this.email.value
        });
      })
      .catch(error => {
        this.showAlert("Error", error.message);
      })
  }

  showAlert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });
    alert.present();
  }

}
