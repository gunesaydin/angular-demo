import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { BlogviewComponent } from './blogview/blogview.component';
import { MsgboardComponent } from './msgboard/msgboard.component';
import { PopupComponent } from './popup/popup.component';
import { ReadmeComponent } from './readme/readme.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BloglistComponent,
    BlogviewComponent,
    MsgboardComponent,
    PopupComponent,
    ReadmeComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BloglistComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
