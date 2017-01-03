import { Component, AfterViewInit } from '@angular/core';
//declare var jQuery:any;
var jQuery = require('jquery');
var $ = jQuery;
//import * as $ from 'jquery';
window["$"] = $;
window["jQuery"] = $;
//require('jquery/src/core/init');
//require('jquery/src/manipulation');

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
    var winWidth = window.innerWidth;
    var winHeight = window.innerHeight;      
    console.log('DOMMMM READY>>', jQuery('#pdfviewer'));
    //console.log('DOMMMM READY>>', $('#pdfviewer'));
    console.log(winWidth,winHeight);

    $('.flipbook').turn({
      // Width
      width:922,
      // Height
      height:600,
      // Elevation
      elevation: 50,
      // Enable gradients
      gradients: true,
      // Auto center this flipbook
      autoCenter: true
    });

  }

}
