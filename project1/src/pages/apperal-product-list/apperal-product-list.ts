import { Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ApperalProductDetailComponent } from '../apperal-product-detail/apperal-product-detail';

@Component({
     selector: 'page-apperal-product-list',
    templateUrl: 'apperal-product-list.html'
})
export class ApperalProductListComponent {

  products: any[];
  
  constructor(
      public navCtrl: NavController,
      private navParams: NavParams) {

          console.log("ApperalProductListComponent (apperal-product-list.ts): ");
          console.log("Constructor called!");

          this.fillProductArray();
  }


  itemTapped($event, product) {
      console.log("itemTapped function called!");
      console.log("product: ");
      console.dir(product);

      this.navCtrl.push(ApperalProductDetailComponent, product);
  }

  
  private fillProductArray() {
      console.log("fillProductArray called!");

      var productsData = [
        {
            "SKU": "927794",
            "Product_Name": "Wedding Embellished Crown Headband",
            "Product_Description": "Silver-tone headband with pearl embellishment. 50% iron, 30% glass, 15% plastic, 5% polyester",
            "Color": "Rhodium",
            "Product_Category": 1,
            "Product_CategoryName": "Accessories",
            "Product_ImageName": "../../assets/images-apperal/accessory_1.jpg",
            "Price": 18.04
        },

        {
            "SKU": "937449",
            "Product_Name": "Reclaimed Vintage Bow and Arrow Hair Hoop",
            "Product_Description": "Silver-tone hair hoop in triangular design with arrow pin fastening. 100% zinc alloy",
            "Color": "Silver",
            "Product_Category": 1,
            "Product_CategoryName": "Accessories",
            "Product_ImageName": "../../assets/images-apperal/accessory_2.jpg",
            "Price": 13.53
        },

        {
            "SKU": "896165",
            "Product_Name": "Fluffy Grey Beanie with Pink Faux Fur Pom",
            "Product_Description": "Two-tone soft knit with faux-fur pomp om addition. 69% acrylic, 31% polyester",
            "Color": "Grey",
            "Product_Category": 1,
            "Product_CategoryName": "Accessories",
            "Product_ImageName": "../../assets/images-apperal/accessory_3.jpg",
            "Price": 18.04
        },

        {
            "SKU": "931060",
            "Product_Name": "Occasion Pretty Beaded Back Headband",
            "Product_Description": "Gold-tone beaded embellishment with secure comb fastenings. 50% zinc, 20% glass, 20% iron, 5% nylon, 5% acrylic",
            "Color": "Multi",
            "Product_Category": 1,
            "Product_CategoryName": "Accessories",
            "Product_ImageName": "../../assets/images-apperal/accessory_4.jpg",
            "Price": 22.55
        },

        {
            "SKU": "944958",
            "Product_Name": "New Look Double Faux Fur Beanie Hat",
            "Product_Description": "Chunky ribbed knit with double faux-fur pom pom detail. 100% acrylic",
            "Color": "Dark Khaki",
            "Product_Category": 1,
            "Product_CategoryName": "Accessories",
            "Product_ImageName": "../../assets/images-apperal/accessory_5.jpg",
            "Price": 15.02
        },

        {
            "SKU": "937874",
            "Product_Name": "Missguided Premium Military Faux Wool Maxi Coat",
            "Product_Description": "Fully lined soft-touch faux-fur outer with double breasted fastening. 80% polyester, 20% viscose",
            "Color": "Olive",
            "Product_Category": 2,
            "Product_CategoryName": "Coats & Jackets",
            "Product_ImageName": "../../assets/images-apperal/coatsandjackets_1.jpg",
            "Price": 105.23
        },

        {
            "SKU": "888694",
            "Product_Name": "Padded Jacket with Waterfall Front",
            "Product_Description": "Mid-weight padded fabric high neck coat with functional pockets. 100% polyester",
            "Color": "Black",
            "Product_Category": 2,
            "Product_CategoryName": "Coats & Jackets",
            "Product_ImageName": "../../assets/images-apperal/coatsandjackets_2.jpg",
            "Price": 112.75
        },

        {
            "SKU": "889309",
            "Product_Name": "Boyfriend Coat in Check Print",
            "Product_Description": "Wool-mix knit with drop shoulders and double breasted button fastening. 33% plyester, 32% wool, 28% acrylic, 4% nylon, 3% cotton",
            "Color": "Black/White",
            "Product_Category": 2,
            "Product_CategoryName": "Coats & Jackets",
            "Product_ImageName": "../../assets/images-apperal/coatsandjackets_3.jpg",
            "Price": 150.33
        },

        {
            "SKU": "931175",
            "Product_Name": "Lipsy Cropped Faux Fur Bomber Jacket",
            "Product_Description": "Fully lined faux-fur fabric with stand collar and zip fastening. 50% acrylic, 50% modacrylic",
            "Color": "Black",
            "Product_Category": 2,
            "Product_CategoryName": "Coats & Jackets",
            "Product_ImageName": "../../assets/images-apperal/coatsandjackets_4.jpg",
            "Price": 127.78
        },

        {
            "SKU": "926554",
            "Product_Name": "Needle & Thread Prarie Embroidery Bomber Jacket",
            "Product_Description": "Fully lined mid-weight embroidered chiffon with baseball collar and zip fastening. 100% polyester",
            "Color": "Rose Beige",
            "Product_Category": 2,
            "Product_CategoryName": "Coats & Jackets",
            "Product_ImageName": "../../assets/images-apperal/coatsandjackets_5.jpg",
            "Price": 353.28
        },

        {
            "SKU": "935750",
            "Product_Name": "Denim Shirt with Open Back in Mid Wash Blue",
            "Product_Description": "Mid-wash cotton denim with point collar and split open back",
            "Color": "Blue",
            "Product_Category": 3,
            "Product_CategoryName": "Denim",
            "Product_ImageName": "../../assets/images-apperal/denim_1.jpg",
            "Price": 52.62
        },

        {
            "SKU": "890834",
            "Product_Name": "Denim Girlfriend Jacket in Wash Black",
            "Product_Description": "Dark wash cotton denim with classic point ollar, button placket, and chest pockets. 100% cotton",
            "Color": "Black",
            "Product_Category": 3,
            "Product_CategoryName": "Denim",
            "Product_ImageName": "../../assets/images-apperal/denim_2.jpg",
            "Price": 60.13
        },

        {
            "SKU": "868726",
            "Product_Name": "Kimmi Shrunken Boyfriend Jeans in Jo Jo Pretty Mid Blue",
            "Product_Description": "Slim fit, mid rise and firm stretch denim. 98% cotton, 2% elastane",
            "Color": "Blue",
            "Product_Category": 3,
            "Product_CategoryName": "Denim",
            "Product_ImageName": "../../assets/images-apperal/denim_3.jpg",
            "Price": 48.11
        },

        {
            "SKU": "789336",
            "Product_Name": "Denim Classic Dungaree Dress with Raw Hem in Washed Balck",
            "Product_Description": "Woven fabric with raw hem design and classic slot-through buckles. 54% cotton, 26% polyester, 20% viscose",
            "Color": "Black",
            "Product_Category": 3,
            "Product_CategoryName": "Denim",
            "Product_ImageName": "../../assets/images-apperal/denim_4.jpg",
            "Price": 52.62
        },

        {
            "SKU": "711592",
            "Product_Name": "Tularosa Rachel Denim Short Dungarees",
            "Product_Description": "Mid-weight design in non-stretch denim with pinafore-style neckline and button placket. 100% cotton",
            "Color": "Light Blue",
            "Product_Category": 3,
            "Product_CategoryName": "Denim",
            "Product_ImageName": "../../assets/images-apperal/denim_5.jpg",
            "Price": 233.01
        },

        {
            "SKU": "931522",
            "Product_Name": "BCBD Maxazria Wrap Dress in Garden Scarf Print",
            "Product_Description": "Printed woven fabric with wrap design with tie side. 94% polyester, 6% elastane",
            "Color": "Multi",
            "Product_Category": 4,
            "Product_CategoryName": "Dresses",
            "Product_ImageName": "../../assets/images-apperal/dresses_1.jpg",
            "Price": 285.63
        },

        {
            "SKU": "941770",
            "Product_Name": "Supertrash Drooklyn Dress",
            "Product_Description": "High buttoned neckline with double-layer yoke detail in woven fabric. 72% modal, 28% polyester",
            "Color": "Gray",
            "Product_Category": 4,
            "Product_CategoryName": "Dresses",
            "Product_ImageName": "../../assets/images-apperal/dresses_2.jpg",
            "Price": 150.33
        },

        {
            "SKU": "789220",
            "Product_Name": "Whistles Jade Shift Dress with Wrap Front",
            "Product_Description": "High neckline with raglan sleeves and wrap front in woven fabric. 100% polyester",
            "Color": "Navy",
            "Product_Category": 4,
            "Product_CategoryName": "Dresses",
            "Product_ImageName": "../../assets/images-apperal/dresses_3.jpg",
            "Price": 210.46
        },

        {
            "SKU": "896025",
            "Product_Name": "Ba&sh Miranda Dress with Separate Blouse",
            "Product_Description": "V-neckline with wide sleeves and detachable blouse. 100% polyester",
            "Color": "Black",
            "Product_Category": 4,
            "Product_CategoryName": "Dresses",
            "Product_ImageName": "../../assets/images-apperal/dresses_4.jpg",
            "Price": 368.31
        },

        {
            "SKU": "857853",
            "Product_Name": "BOSS Orange by Hugo Boss Pleat Back Shift Dress",
            "Product_Description": "Round neckline and pleat back in lined woven fabric. 100% polyester",
            "Color": "Bright Pink",
            "Product_Category": 4,
            "Product_CategoryName": "Dresses",
            "Product_ImageName": "../../assets/images-apperal/dresses_5.jpg",
            "Price": 269.09
        },

        {
            "SKU": "948553",
            "Product_Name": "Puma Exclusive to Asos Extreme Oversized Hoodie",
            "Product_Description": "Drawstring hoodie with dropped shoulders and fitted cuffs and hem in soft-touch sweat. 80% cotton, 20% polyester",
            "Color": "Mineral Yellow",
            "Product_Category": 5,
            "Product_CategoryName": "Hoodies & Sweatshirts",
            "Product_ImageName": "../../assets/images-apperal/hoodiesandsweatshirts_1.jpg",
            "Price": 67.65
        },

        {
            "SKU": "939247",
            "Product_Name": "Cropped Pullover Hoodie",
            "Product_Description": "Drawstring hoodie with ribbed trim in soft cotton sweat. 100% cotton",
            "Color": "White",
            "Product_Category": 5,
            "Product_CategoryName": "Hoodies & Sweatshirts",
            "Product_ImageName": "../../assets/images-apperal/hoodiesandsweatshirts_2.jpg",
            "Price": 27.06
        },

        {
            "SKU": "914087",
            "Product_Name": "Sol Angeles Logo Sweat",
            "Product_Description": "Scoop neckline with front text print and fitted trims. 48% polyester, 48% rayon, 4% spandex",
            "Color": "Indigo",
            "Product_Category": 5,
            "Product_CategoryName": "Hoodies & Sweatshirts",
            "Product_ImageName": "../../assets/images-apperal/hoodiesandsweatshirts_3.jpg",
            "Price": 108.24
        },

        {
            "SKU": "925916",
            "Product_Name": "KKXX Luxury Pull Over",
            "Product_Description": "Oversized drawstring hoodie with pouch pockets. 50% rayon, 35% tencel lyocell, 15% cotton",
            "Color": "Sand",
            "Product_Category": 5,
            "Product_CategoryName": "Hoodies & Sweatshirts",
            "Product_ImageName": "../../assets/images-apperal/hoodiesandsweatshirts_4.jpg",
            "Price": 112.75
        },

        {
            "SKU": "863006",
            "Product_Name": "The Ultimate Boyfriend Sweat",
            "Product_Description": "Crew neckline with fitted trims in pure cotton. 100% cotton",
            "Color": "Blush",
            "Product_Category": 5,
            "Product_CategoryName": "Hoodies & Sweatshirts",
            "Product_ImageName": "../../assets/images-apperal/hoodiesandsweatshirts_5.jpg",
            "Price": 24.05
        }
    ];

    //Sort the products by Product_Name
    //the sort() dunction is a javascript function
    this.products =
        productsData.sort((a,b) => {
            if(a.Product_Name < b.Product_Name) return -1;
            else if (a.Product_Name > b.Product_Name) return 1;
            else return 0;
        })
  }

} //end of component class
