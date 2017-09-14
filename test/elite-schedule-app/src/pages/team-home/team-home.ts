import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { 
  StandingsPage,
  TeamDetailPage,
  MyTeamsPage
} from '../pages';

@IonicPage()
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.html',
})
export class TeamHomePage {

  team: any;

  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(private navCtrl: NavController, private navParams: NavParams) {
    this.team = this.navParams.data;
    console.log('**nav params: ', this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TeamHomePage');
  }

  goToHome() {
    //this.navCtrl.push(MyTeamsPage);
    this.navCtrl.popToRoot();
  }






} //end of export class
