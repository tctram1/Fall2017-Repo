import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {}


  refresh() {
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }





} //end of export class
