import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Content } from 'ionic-angular';

import { AngularFireDatabase } from 'angularfire2/database';


/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  @ViewChild(Content) content: Content;

  userName: string = '';
  message: string = '';
  messages: object[] = [];
  _chatSubscription; //FirebaseListObservable<any[]>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public fireDb: AngularFireDatabase) {
    this.userName = this.navParams.get('userName');
    this._chatSubscription = this.fireDb.list('chat').subscribe(data => {
      this.messages = data;
      // data.map(elem => {
      //   this.messages.push(elem);
      // })
      setTimeout(() => {
        this.scrollToBottom();
      },300)
    })
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad ChatPage');
    this.fireDb.list('/chat').push({
      specialMessage: true,
      message: `${this.userName} has joined the room`
    })
  }

  ionViewWillLeave() {
    this._chatSubscription.unsubscribe();
    this.fireDb.list('/chat').push({
      specialMessage: true,
      message: `${this.userName} has left the room`
    })
    this.scrollToBottom();
  }

  sendMessage() {
    if ( this.message !== null && this.message !== "") {
      this.fireDb.list('/chat').push({
        userName: this.userName,
        message: this.message
      }).then(() => {
        this.scrollToBottom();
      }).catch(() => {

      })
    }
    this.message = '';
  }

  scrollToBottom() {
    this.content.scrollToBottom(100);
  }

}
