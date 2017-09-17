import { Component } from '@angular/core';

@Component({
    selector: 'helloworld-component',
    template: `
    <div>
        <h5>{{pageMessage}}</h5>
    </div>
    `
})
export class HelloWorldComponent {
    pageMessage: string = "Hello World! (From helloworld.component)"
}
