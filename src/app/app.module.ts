import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'pdfViewer', component: PdfViewerComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  imports:      [ 
    BrowserModule,
    RouterModule.forRoot(appRoutes)
 ],
  declarations: [ 
    AppComponent,
    PdfViewerComponent,
    HomeComponent,
    PageNotFoundComponent
 ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
