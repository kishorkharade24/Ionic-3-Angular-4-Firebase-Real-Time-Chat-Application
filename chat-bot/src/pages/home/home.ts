import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import {ChatPage} from "../chat/chat";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string = '';

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {

  }

  loginUser() {
    this.navCtrl.push(ChatPage, {
      userName: this.userName
    });
    // if (/^[a-zA-Z0-9]]+$/.test(this.userName)) {
    //   this.navCtrl.push(ChatPage, {
    //     userName: this.userName
    //   });
    // } else {
    //   this.alert('Error', 'Invalid username!');
    // }
  }

  alert(title: string, message: string) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: message,
      buttons: ['OK']
    });

    alert.present();
  }

}
