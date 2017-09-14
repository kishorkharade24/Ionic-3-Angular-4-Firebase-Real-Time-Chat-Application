import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';
import { RegisterPage } from "../pages/register/register";
import { SigninPage } from '../pages/signin/signin';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from "angularfire2/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBIV-T7FKg8WAbsDmqBfMKhoAwfBMxwwP8",
  authDomain: "ionic-chat-bot.firebaseapp.com",
  databaseURL: "https://ionic-chat-bot.firebaseio.com",
  projectId: "ionic-chat-bot",
  storageBucket: "ionic-chat-bot.appspot.com",
  messagingSenderId: "623882371928"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage,
    RegisterPage,
    SigninPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage,
    RegisterPage,
    SigninPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
