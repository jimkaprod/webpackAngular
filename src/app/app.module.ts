import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PdfViewerComponent } from './pdf-viewer/pdf-viewer.component';
import { PdfViewerPageComponent } from './pdf-viewer-page/pdf-viewer-page.component';
import { PdfViewerPageService } from './pdf-viewer-page/pdf-viewer-page.service';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'pdfViewer', component: PdfViewerComponent },
  { path: 'pdfViewerPage', component: PdfViewerPageComponent },
  { path: '', component: HomeComponent },
  { path: '**', component: PageNotFoundComponent }
];


@NgModule({
  imports:      [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    HttpModule
 ],
  declarations: [
    AppComponent,
    PdfViewerComponent,
    PdfViewerPageComponent,
    HomeComponent,
    PageNotFoundComponent
 ],
  providers: [
    PdfViewerPageService
 ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
