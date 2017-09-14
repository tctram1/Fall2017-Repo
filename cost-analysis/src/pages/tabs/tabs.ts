import { Component } from '@angular/core';

import { CalculatorPage } from '../calculator/calculator';
import { ResultPage } from '../result/result';
import { TestPage } from '../test/test';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CalculatorPage;
  tab2Root = ResultPage;
  tab3Root = TestPage;

  constructor() {

  }
}
