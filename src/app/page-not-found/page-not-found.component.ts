import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './page-not-found.component.html',
})

export class PageNotFoundComponent {

    constructor() {
        console.log('PAGE NOT FOUND COMPONENT>>',process.env);
    }

}
