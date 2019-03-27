import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {LoginModule} from "./login/login.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptors} from "./helpers/jwt.interceptors";
import { WineComponent } from './wine/wine.component';
import {MatExpansionModule, MatInputModule, MatButtonModule, MatSelectModule, MatRadioModule, MatCardModule, MatTableModule, MatPaginatorModule, MatSortModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule, MatGridListModule, MatMenuModule} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { WineListDetailComponent } from './wine-list-detail/wine-list-detail.component';
import { AdressComponent } from './adress/adress.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './table/table.component';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { DashComponent } from './dash/dash.component';
import { Nav1Component } from './nav1/nav1.component';

@NgModule({
  declarations: [
    AppComponent,
    WineComponent,
    WineListDetailComponent,
    AdressComponent,
    TableComponent,
    NavComponent,
    DashComponent,
    Nav1Component
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    LoginModule,
    MatExpansionModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatGridListModule,
    MatMenuModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
