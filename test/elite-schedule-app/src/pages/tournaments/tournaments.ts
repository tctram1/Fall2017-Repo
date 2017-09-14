import { Component } from '@angular/core';
import { 
  LoadingController, 
  IonicPage, 
  NavController, 
  NavParams } from 'ionic-angular';

import { 
  MyTeamsPage,
  TeamsPage
} from '../pages';

import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html',
})
export class TournamentsPage {

  tournaments: any;

  constructor(private navCtrl: NavController, 
              private navParams: NavParams, 
              private eliteApi: EliteApi,
              private loadingController: LoadingController) {}

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: 'Getting tournaments ...'
    });

    loader.present().then(() => {
      this.eliteApi.getTournaments().then(data => {
        this.tournaments = data;
        loader.dismiss();
      });
    });
    
    console.log('## lifecycle ## ionViewDidLoad TournamentsPage');
  }
  
  itemTapped($event, tourney) {
    this.navCtrl.push(TeamsPage, tourney);
  }



  



} //end of export class
