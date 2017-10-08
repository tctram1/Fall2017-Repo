import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  RecipeName: string = 'Sunset Smoothie';

  constructor(public navCtrl: NavController) {

  }

}
