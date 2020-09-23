import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { QuestionsComponent } from './components/questions/questions.component';
import { SlideBarComponent } from './components/slide-bar/slide-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionsComponent,
    SlideBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
