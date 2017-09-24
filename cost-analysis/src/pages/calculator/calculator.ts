import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-calculator',
  templateUrl: 'calculator.html',
})
export class CalculatorPage {

  quantity;
  price;
  total;

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

  //Start of calculateResult()
  calculateResult() {
    this.total = this.quantity * this.price
  } 
  // End of caculateResult()








} //end of export class
