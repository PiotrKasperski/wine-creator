import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./login/login.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptors} from "./helpers/jwt.interceptors";
import { WineComponent } from './wine/wine.component';
import {MatExpansionModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WineListDetailComponent } from './wine-list-detail/wine-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    WineListDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    MatExpansionModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
