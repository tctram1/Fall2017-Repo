import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    selector: 'page-apperal-product-detail',
    templateUrl: 'apperal-product-detail.html'
})
export class ApperalProductDetailComponent {

 category: any;
    selectedProduct: any;

    //constructor
    constructor(public navCtrl: NavController, 
                private navParams: NavParams) {
        console.log("ApperalProductDetailComponent constructor called!");

        this.selectedProduct = this.navParams.data;
        console.log("this.selectedProduct:");
        console.dir(this.selectedProduct);
    }
 
 

} //end of component class
