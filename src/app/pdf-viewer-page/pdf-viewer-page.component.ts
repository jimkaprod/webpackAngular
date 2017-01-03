import { Component, AfterViewInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { PdfViewerPageService } from './pdf-viewer-page.service';
@Component({
  selector: 'my-app',
  templateUrl: './pdf-viewer-page.component.html',
})

export class PdfViewerPageComponent implements AfterViewInit {
  data = "hello BoY";

  constructor(pdfViewerPageService: PdfViewerPageService) {
      console.log('PDF VIEWER COMPONENT PAGE>>',process.env);
      console.log('<<<<<<<<<<<<<>>>>>>>>>>>>>>>>');
      console.log('PDF VIEWER COMPONENT PAGE>>',pdfViewerPageService);
      console.log('PDF VIEWER COMPONENT PAGE>>',pdfViewerPageService.getValue());
      this.data = pdfViewerPageService.fetchedHtml;
      //this.data = pdfViewerPageService.getValue();
  }

  ngAfterViewInit() {
    console.log('IO');
  }
}

