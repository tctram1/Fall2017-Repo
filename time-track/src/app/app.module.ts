import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { StopTimingPage } from '../pages/stop-timing/stop-timing';
import { Projects } from '../providers/projects/projects';
import { HoursMinutesSecondsPipe } from '../pipes/hours-minutes-seconds/hours-minutes-seconds';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    StopTimingPage,
    HoursMinutesSecondsPipe
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    StopTimingPage,
    HoursMinutesSecondsPipe
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Storage,
    Projects
  ]
})
export class AppModule {}
