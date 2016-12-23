import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './home.component.html',
})

export class HomeComponent {

    constructor() {
        console.log('HOME COMPONENT>>',process.env);
    }

}
