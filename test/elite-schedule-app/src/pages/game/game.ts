import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { EliteApi } from "../../shared/shared";

import { TeamHomePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-game',
  templateUrl: 'game.html',
})

export class GamePage {

  game: any;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('## lifecycle ## ionViewDidLoad GamePage');

    this.game = this.navParams.data;
  }

  teamTapped(teamId) {
    let tourneyData = this.eliteApi.getCurrentTourney();
    let team = tourneyData.teams.find(t => t.id === teamId);
    this.navCtrl.push(TeamHomePage, team);
  }







} //end of export class
