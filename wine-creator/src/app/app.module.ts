import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginModule} from "./login/login.module";
import {HTTP_INTERCEPTORS} from "@angular/common/http";
import {JwtInterceptors} from "./helpers/jwt.interceptors";
import {WineComponent} from './wine/wine.component';
import {
  MatButtonModule,
  MatCardModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatRadioModule,
  MatSelectModule,
  MatSidenavModule,
  MatSortModule,
  MatTableModule,
  MatToolbarModule
} from "@angular/material";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {WineListDetailComponent} from './wine-list-detail/wine-list-detail.component';
import {ReactiveFormsModule} from '@angular/forms';
import {NavComponent} from './nav/nav.component';
import {LayoutModule} from '@angular/cdk/layout';
import {Nav1Component} from './nav1/nav1.component';
import {AddFabComponent} from './add-fab/add-fab.component';
import {AddNewWineDialogComponent} from './add-new-wine-dialog/add-new-wine-dialog.component';

@NgModule({
  declarations: [
    AppComponent,


    WineComponent,
    WineListDetailComponent,

    NavComponent,

    Nav1Component,

    AddFabComponent,

    AddNewWineDialogComponent,



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
    MatMenuModule,
    MatDialogModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true}],
  entryComponents: [AddNewWineDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
