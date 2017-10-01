import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  username: string = '';
  message: string = '';
  subscription;
  messages: object[] = [];

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public db: AngularFireDatabase) {
    console.log(this.navParams);

    this.username = this.navParams.get('username');
    this.subscription = this.db.list('/chat').subscribe( data => {
      this.messages = data;
    });
  }

  send() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then( () => {
      //message is sent
    }).catch( () => {
      //some error. maybe firebase is unreachable
    });

    this.message = '';
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  






} //end of export class
