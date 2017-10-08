import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})

export class AddItemPage {

  title: string;
  description: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public view: ViewController) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  } //end of ionViewDidLoad()

  saveItem() {

    let newItem = {
      title: this.title,
      description: this.description
    };

    this.view.dismiss(newItem);

  } //end of saveItem()

  close() {
    this.view.dismiss();
  } //end of close()






} //end of export class
