import { Injectable } from '@angular/core';
import { Storage } from '@ionic/Storage';
import 'rxjs/add/operator/map';

@Injectable()

export class Data {

  constructor(public storage:Storage) {
    console.log('Hello Data Provider');
  }

  getData() {
    return this.storage.get('todos');  
  }
 
  save(data){
    let newData = JSON.stringify(data);
    this.storage.set('todos', newData);
  }









} //end of export class
