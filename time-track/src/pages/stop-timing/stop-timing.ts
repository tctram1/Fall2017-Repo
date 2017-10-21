import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-stop-timing',
  templateUrl: 'stop-timing.html',
})

export class StopTimingPage {

  elapsedTime: any = 0;
  hours: any;
  minutes: any;
  seconds: any;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public viewCtrl: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad StopTimingPage');

    this.elapsedTime = this.navParams.get('elapsedTime');

    this.minutes = Math.floor(this.elapsedTime / 60);
    this.hours = Math.floor(this.minutes / 60);
    this.seconds = Math.floor(this.elapsedTime % 60);

  } //end of ionViewDidLoad()


  submitTime() {

    let modifiedSeconds = (this.hours * 60 * 60) + (this.minutes * 60) + this.seconds;
    this.viewCtrl.dismiss(modifiedSeconds);

  } //end of submitTime()



} //end of export class
