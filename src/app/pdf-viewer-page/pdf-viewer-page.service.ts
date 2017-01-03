import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PdfViewerPageService {
  fetchedHtml = "";

  constructor(private http: Http) {

  }

  getValue(){

    var headers = new Headers();
    headers.append('x-forwarded-host', 'foo');

    this.http.get('http://localhost:8080/', {headers: headers}).subscribe(response => {
      console.log(response._body);
      this.fetchedHtml = response._body;
    });

    return 'youyou';
  }
}
