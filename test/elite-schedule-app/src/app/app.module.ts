import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { MyApp } from './app.component';
import { 
  MyTeamsPage,
  TournamentsPage,
  GamePage,
  TeamDetailPage,
  TeamsPage,
  TeamHomePage,
  StandingsPage } from '../pages/pages';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage
  ],

  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],

  bootstrap: [IonicApp],

  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    GamePage,
    TeamDetailPage,
    TeamsPage,
    TeamHomePage,
    StandingsPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
