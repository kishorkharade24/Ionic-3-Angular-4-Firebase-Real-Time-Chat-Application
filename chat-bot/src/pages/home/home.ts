import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { RegisterPage } from "../register/register";
import { SigninPage } from "../signin/signin";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string = '';

  constructor(public navCtrl: NavController) {

  }

  signInUser() {
    this.navCtrl.push(SigninPage);
  }

  registerUser() {
    this.navCtrl.push(RegisterPage);
  }

}
