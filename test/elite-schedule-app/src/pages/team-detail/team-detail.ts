import { Component } from '@angular/core';
import { AlertController, IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import * as _ from 'lodash';
import * as moment from 'moment';

import { EliteApi } from "../../shared/shared";

import { GamePage } from '../pages';

@IonicPage()
@Component({
  selector: 'page-team-detail',
  templateUrl: 'team-detail.html',
})
export class TeamDetailPage {

  allGames: any[];
  dateFilter: string;
  team: any;
  games: any[];
  teamStanding: any;
  private tourneyData: any;
  useDateFilter = false;
  isFollowing = false;

  constructor(private alterController: AlertController,
              private navCtrl: NavController, 
              private navParams: NavParams,
              private toastController: ToastController,
              private eliteApi: EliteApi) {}

  ionViewDidLoad() {
    console.log('## lifecycle ## ionViewDidLoad TeamDetailPage');

    this.team = this.navParams.data;
    this.tourneyData = this.eliteApi.getCurrentTourney();

    this.games = _.chain(this.tourneyData.games)
                  .filter(g => g.team1Id === this.team.id || g.team2Id === this.team.id)
                  .map(g => {
                    let isTeam1 = (g.team1Id === this.team.id);
                    let opponentName = isTeam1 ? g.team2 : g.team1;
                    let scoreDisplay = this.getScoreDisplay(isTeam1, g.team1Score, g.team2Score)
                      return {
                        gameId: g.id,
                        opponent: opponentName,
                        time: Date.parse(g.time),
                        location: g.location,
                        locationUrl: g.locationUrl,
                        scoreDisplay: scoreDisplay,
                        homeAway: (isTeam1 ? "vs. " : "at")
                      };
                  })
                  .value();
  
  this.allGames = this.games;                

  this.teamStanding = _.find(this.tourneyData.standings, { 'teamId': this.team.id });

  }

  getScoreDisplay(isTeam1, team1Score, team2Score) {
    if (team1Score && team2Score) {
      var teamScore = (isTeam1 ? team1Score : team2Score);
      var opponentScore = (isTeam1 ? team2Score : team1Score);
      var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
      return winIndicator + teamScore + "-" + opponentScore;
    }
    else {
      return "";
    }
  }

  // goToHome() {
  //   //this.navCtrl.push(MyTeamsPage);
  //   this.navCtrl.parent.parent.popToRoot();
  //   console.log('**parent: ', this.navCtrl.parent);
  // }

  gameClicked($event, game) {
    let sourceGame = this.tourneyData.games.find(g => g.id === game.gameId);
    this.navCtrl.parent.parent.push(GamePage, sourceGame);
  }

  getScoreWorL(game) {
    return game.scoreDisplay ? game.scoreDisplay[0]: '';
  }

  getScoreDisplayBatchClass(game) {
    return game.scoreDisplay.indexOf('W') === 0 ? 'badge-primary' : 'badge-danger';
  }

  dateChanged() {
    if (this.useDateFilter) {
      this.games = _.filter(this.allGames, g => moment(g.time).isSame(this.dateFilter, 'day'));
    } else {
      this.games = this.allGames;
    }
  }

  toggleFollow() {
    if (this.isFollowing) {
      let confirm = this.alterController.create({
        title: 'Unfollow',
        message: 'Are you sure to unfollow?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.isFollowing = false;
              //TODO: persist data

              let toast = this.toastController.create({
                message: 'You have unfollowed this team.',
                duration: 2000,
                position: 'bottom'
              });
              toast.present();
            }
          },
          {
            text: 'No',
          }
        ]
      });
      confirm.present();
    } else {
      this.isFollowing = true;
      //TODO: persist data

      let toast = this.toastController.create({
        message: 'You have followed this team!',
        duration: 2000,
        position: 'bottom'
      });
      toast.present();
    }
  }







} //end of export class
