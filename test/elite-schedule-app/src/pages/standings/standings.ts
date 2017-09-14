import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import * as _ from 'lodash';

import { EliteApi } from "../../shared/shared";

@IonicPage()
@Component({
  selector: 'page-standings',
  templateUrl: 'standings.html',
})

export class StandingsPage {

  allStandings: any[];
  standings: any[];
  team: any;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams,
              private eliteApi: EliteApi) {
  }

  ionViewDidLoad() {
    console.log('## lifecyle ## ionViewDidLoad StandingsPage');

    this.team = this.navParams.data;
    let tourneyData = this.eliteApi.getCurrentTourney();
    this.standings = tourneyData.standings;

    this.allStandings =
      _.chain(this.standings)
        .groupBy('division')
        .toPairs()
        .map(item => _.zipObject(['divisionName', 'divisionStandings'], item))
        .value();

    console.log('standings: ', this.standings);
    console.log('division Standings', this.allStandings);
  }






} //end of export class
