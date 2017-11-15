import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  quantity1;
  quantity2;
  quantity3;
  price1;
  price2;
  price3;
  total;

  row: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CalculatorPage');
  }

  // Start of Adding Row Function
  public rows: Array<{ Col1: string, Col2: string, Col3: string }> = [];
  private maxQuantity: number = 30;

  public addRow(): void {
    this.rows.push({ Col1: 'Item', Col2: 'Qty.', Col3: 'Price' });
  }
  // End of Adding Row Function


  // //Start of getTotal()
  getTotal() {
    this.total = (this.quantity1 * this.price1)
                + (this.quantity2 * this.price2)
                + (this.quantity3 * this.price3);
    console.log('total = ' + this.total);
  } // End of getTotal()


  // //Start of getTotal()
  // $scope.getTotal = function($scope) {
  //   var total = 0;
  //   for (var i = 0; i < $scope.rows.length; i++) {
  //     var row = $scope.rows[i];
  //     total += (row.price * row.quantity);
  //   }
  // } // End of getTotal()


  // //Start of getTotal()
  // getTotal = function($scope) {
  //   var total = 0;
  //   for (var i = 0; i < $scope.row.length; i++) {
  //     var row = $scope.row[i];
  //     total += (row.price * row.quantity);
  //   }
  // } // End of getTotal()








} //end of export class
