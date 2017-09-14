import { Component } from '@angular/core';
import { 
  LoadingController,
  IonicPage, 
  NavController, 
  NavParams } from 'ionic-angular';

import { 
  TournamentsPage,
  TeamHomePage } from '../pages';

import { EliteApi } from '../../shared/shared';

@IonicPage()
@Component({
  selector: 'page-my-teams',
  templateUrl: 'my-teams.html',
})
export class MyTeamsPage {

  favorites = [
    {
      team: { id: 6182, name: 'HC Elite 7th', coach: 'Michelotti'},
      tournamentId: '89e13aa2-ba6d-4f55-9cc2-61eba6172c63',
      tournamentName: 'March Madness Tournament'
    }
  ];

  constructor(private navCtrl: NavController,
              private navParams: NavParams,
              private eliteApi: EliteApi,
              private loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyTeamsPage');
  }

  goToTournaments() {
    this.navCtrl.push(TournamentsPage);
  }

  favoriteTapped($event, favorite) {
    let loader = this.loadingController.create({
      content: 'Gettig data ...',
      dismissOnPageChange: true
    });

    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId)
        .subscribe(t => this.navCtrl.push(TeamHomePage, favorite.team));

  }








} //end of export class
