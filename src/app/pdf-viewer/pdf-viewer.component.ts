import { Component, AfterViewInit } from '@angular/core';
// require('../shared/turnjs/hash.js');
// require('../shared/turnjs/turn.js');
// require('../shared/turnjs/zoom.min.js');
// require('../shared/turnjs/magazine.js');
// require('../shared/turnjs/initMagazine.js');
var $ = require('jquery/src/core');
require('jquery/src/core/init');
require('jquery/src/manipulation');

//var jQuery = require("")

//import $ from 'jquery';
@Component({
  selector: 'my-app',
  templateUrl: './pdf-viewer.component.html',
})

export class PdfViewerComponent implements AfterViewInit {

    constructor() {
        console.log('PDF VIEWER COMPONENT>>',process.env);
    }

    ngAfterViewInit() {
       console.log('DOM READY>>', $('#liseuse'));
       //loadApp();
    }

}
