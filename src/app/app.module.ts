import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { headerComponent } from './header/app.headerComponent';
import { navComponent } from './nav/app.navComponent';
import { contentAreaComponent } from './contentArea/app.contentAreaComponent';
import { footerComponent } from './footer/app.footerComponent';
import { contactComponent } from './contact/app.contactComponent';

import { Angular2FontawesomeModule } from 'angular2-fontawesome/angular2-fontawesome';



let sampleTemplate = `
<fa [name]="rocket" [border]=true></i>
<i fa [name]="rocket" [border]=true></i>
`

@NgModule({
  declarations: [
    AppComponent,
    headerComponent,
    navComponent,
    contentAreaComponent,
    footerComponent,
    contactComponent
  ],
  imports: [
    BrowserModule,
    Angular2FontawesomeModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  })
export class AppModule { }
