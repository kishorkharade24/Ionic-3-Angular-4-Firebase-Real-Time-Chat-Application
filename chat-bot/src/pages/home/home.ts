import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";
import {RegisterPage} from "../register/register";
import {SigninPage} from "../signin/signin";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string = '';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  signInUser() {
    this.navCtrl.push(SigninPage);
  }

  registerUser() {
    this.navCtrl.push(RegisterPage);
  }

}
