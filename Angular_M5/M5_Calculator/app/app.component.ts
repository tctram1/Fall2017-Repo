import { Component } from '@angular/core';

@Component({
    selector: 'app-component',
    template: `
    <div>
        <h2>{{pageMessage}}</h2>
        <calculator-component></calculator-component>
    </div>
    `
})
export class AppComponent {
    pageMessage: string = "Welcome (From AppComponent.pageMessage)";
}
