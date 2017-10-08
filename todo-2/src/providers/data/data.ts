import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

@Injectable()

export class Data {

  constructor(public storage: Storage) {
    console.log('Hello DataProvider Provider');
  } //end of constructor

  getData() {

    return this.storage.get('todos');

  } //end of getData()

  save(data) {

    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);

  } //end of save()





 } //end of export class
