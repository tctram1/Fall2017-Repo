import { Component } from '@angular/core';


@Component({
    selector: 'calculator-component',
    moduleId: module.id,
    templateUrl: 'calculator.component.html'

    //template: `
    //<div>
    //    <h5>{{pageMessage}}</h5>
    //</div>
    //`
})


export class CalculatorComponent {

    //Properties
    pageMessage: string = "Calculator! (From calculator.component)";
    firstNumber: number = 20;
    secondNumber: number = 10;
    result: number;

    //Methods

    //name: multiplyNumbers()
    multiplyNumbers() {
        console.log("multiplyNumbers() method called!");

        this.result = this.firstNumber * this.secondNumber;
        console.log("result = " + this.result);
    }


    //name: divideNumbers()
    divideNumbers() {
        console.log("divideNumbers() method called!");

        this.result = this.firstNumber / this.secondNumber;
        console.log("result = " + this.result);
    }


    //name: addNumbers()
    addNumbers() {
        console.log("addNumbers() method called!");

        this.result = this.firstNumber + this.secondNumber;
        console.log("result = " + this.result);
    }


    //name: subtractNumbers()
    subtractNumbers() {
        console.log("subtractNumbers() method called!");

        this.result = this.firstNumber - this.secondNumber;
        console.log("result = " + this.result);
    }



} //end of class
