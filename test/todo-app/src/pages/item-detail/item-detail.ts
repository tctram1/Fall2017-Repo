import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})

export class ItemDetailPage {

  title;
  description;

  constructor(public navCtrl: NavController,
              public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
    this.title = this.navParams.get('item').title;
    this.description = this.navParams.get('item').description;
  }








} //end of export class
