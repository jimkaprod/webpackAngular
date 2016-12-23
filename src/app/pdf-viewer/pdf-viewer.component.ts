import { Component, AfterViewInit } from '@angular/core';
require('../shared/turnjs/hash.js');
require('../shared/turnjs/turn.js');
require('../shared/turnjs/zoom.min.js');
require('../shared/turnjs/magazine.js');
require('../shared/turnjs/initMagazine.js');

@Component({
  selector: 'my-app',
  templateUrl: './pdf-viewer.component.html',
})

export class PdfViewerComponent implements AfterViewInit {

    constructor() {
        console.log('PDF VIEWER COMPONENT>>',process.env);
    }

    ngAfterViewInit() {
       console.log('DOM READY');
       loadApp();
    }

}
