import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

import { AddItemPage } from '../add-item/add-item';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public items = [];

  constructor(public navCtrl: NavController,
              public modalCtrl: ModalController) {}

  ionViewDidLoad() {} //end of ionViewDidLoad()

  addItem() {

    let addModal = this.modalCtrl.create(AddItemPage);

    addModal.onDidDismiss((item) => {
      if(item) {
        this.saveItem(item);
      }
    });

    addModal.present();

  } //end of addItem()

  saveItem(item) {

    this.items.push(item);

  } //end of saveItem()

  viewItem(item) {

  } //end of viewItem()




} //end of export class
