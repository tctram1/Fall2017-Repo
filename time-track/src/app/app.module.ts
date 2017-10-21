import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StopTimingPage } from '../pages/stop-timing/stop-timing';
import { Projects } from '../providers/projects/projects';
import { HoursMinutesSeconds } from '../pipes/hours-minutes-seconds/hours-minutes-seconds';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StopTimingPage,
    HoursMinutesSeconds
  ],

  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StopTimingPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Projects
  ]
})
export class AppModule {}
