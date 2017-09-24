import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { CalculatorPage } from '../pages/calculator/calculator';
import { ResultPage } from '../pages/result/result';
import { TestPage } from '../pages/test/test';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

var config = {
  apiKey: "AIzaSyAiozUsOkLqakAO0449Rr92WNoy4dyIbKY",
  authDomain: "cost-analysis.firebaseapp.com",
  databaseURL: "https://cost-analysis.firebaseio.com",
  projectId: "cost-analysis",
  storageBucket: "cost-analysis.appspot.com",
  messagingSenderId: "280279493575"
};

@NgModule({
  declarations: [
    MyApp,
    CalculatorPage,
    ResultPage,
    TestPage,
    TabsPage
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
    CalculatorPage,
    ResultPage,
    TestPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
