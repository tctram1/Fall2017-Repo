import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
//import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

/**
 * Generated class for the TestPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  quantity;
  price;
  total;

  constructor(public navCtrl: NavController,
              public navParams: NavParams
              //public db: AngularFireDatabase
              ) {
    console.log(this.navParams);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestPage');
  }

  // Start of Adding Row Function
  public rows: Array<{ firstCol: string, secondCol: string }> = [];
  private maxQuantity: number = 5;

  public addrow(): void {
    this.rows.push({ firstCol: '1 of 2', secondCol: '2 of 2' });
  }
  // End of Adding Row Function


  // Start of Calculation in Array Function
  // $scope.initialPrice = 10;
  
  // $scope.onClickAdd = function(item){
  //     if(!item.added)
  //       $scope.initialPrice+=item.price
  //     else
  //       $scope.initialPrice-=item.price
  
  //     item.added = !item.added;
  // };
  // End of Calculation in Array Function

  //Start CalculateResult()
  calculateResult() {
    this.total = this.quantity * this.price
  } //end of caculateResult()



  



} //end of export class
