import { Component} from '@angular/core';
import { NavController } from 'ionic-angular';

import { ApperalProductByCategoryComponent } from '../apperal-product-bycategory/apperal-product-bycategory';

@Component({
    selector: 'page-apperal-category-list',
    templateUrl: 'apperal-category-list.html'
})
export class ApperalCategoryListComponent {

    categories: any[];

    constructor(public navCtrl: NavController) {
        console.log("ApperalCategoryListComponent (apperal-category-list.ts):");
        console.log("Constructor called!");

        //Fill the this.categories array with music category objects
        //sorted by category name
        this.fillCategoryArray();
    }


    itemTapped($event, category) {
        console.log("itemTapped() funcrion called!");
        console.log("category:");
        console.dir(category);

        this.navCtrl.push(ApperalProductByCategoryComponent, category);
    }


    private fillCategoryArray() {
        console.log("fillCategoryArray called!");

        var unsortedCategories = [
        {
                "CatID": 1,
                "CatName": "Accessories"
            },

            {
                "CatID": 2,
                "CatName": "Coats & Jackets"
            },

            {
                "CatID": 3,
                "CatName": "Denim"
            },

            {
                "CatID": 4,
                "CatName": "Dresses"
            },

            {
                "CatID": 5,
                "CatName": "Hoodies & Sweatshirts"
            }
    ];

        //Sort the Categories by category name
        //the sort() function is a javascript function
        this.categories = unsortedCategories.sort((a,b) => {
            if(a.CatName < b.CatName) return -1;
            else if (a.CatName > b.CatName) return 1;
            else return 0;
        })
    }

  
  

} //end of component class
