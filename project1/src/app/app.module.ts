import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { ApperalCategoryListComponent } from '../pages/apperal-category-list/apperal-category-list';
import { ApperalProductListComponent } from '../pages/apperal-product-list/apperal-product-list';
import { ApperalProductByCategoryComponent } from '../pages/apperal-product-bycategory/apperal-product-bycategory';
import { ApperalProductDetailComponent } from '../pages/apperal-product-detail/apperal-product-detail';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ApperalCategoryListComponent,
    ApperalProductListComponent,
    ApperalProductByCategoryComponent,
    ApperalProductDetailComponent
  ],

  imports: [
    IonicModule.forRoot(MyApp)
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ApperalCategoryListComponent,
    ApperalProductListComponent,
    ApperalProductByCategoryComponent,
    ApperalProductDetailComponent
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
