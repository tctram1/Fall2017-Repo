import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApperalCategoryListComponent } from '../apperal-category-list/apperal-category-list';
import { ApperalProductListComponent } from '../apperal-product-list/apperal-product-list';


@Component({
   selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {

  //Constructor
  constructor(private nav: NavController){}

  //pageMessage: string = "This is the HomePage component!";

    goToApperalCategories(){
        console.log("goToCategories() function called!");

            this.nav.push(ApperalCategoryListComponent); 
    }


    goToApperalProducts() {
        console.log("goToApperalProducts() function called!");

            this.nav.push(ApperalProductListComponent); 
    }

} //end of class
