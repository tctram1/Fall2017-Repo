import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ChatPage } from '../pages/chat/chat';

var config = {
  apiKey: "AIzaSyCXMrSGgxf0Z04tlKxlSE52REoyhs-cRXU",
  authDomain: "real-time-chat-5c9f0.firebaseapp.com",
  databaseURL: "https://real-time-chat-5c9f0.firebaseio.com",
  projectId: "real-time-chat-5c9f0",
  storageBucket: "real-time-chat-5c9f0.appspot.com",
  messagingSenderId: "201865171878"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
