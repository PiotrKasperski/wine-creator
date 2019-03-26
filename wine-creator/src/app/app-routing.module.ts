import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import {AppComponent} from "./app.component";
import {AuthGuard} from "./guards/auth.guard";
import {WineComponent} from "./wine/wine.component";

const routes: Routes = [{path:'login', component: LoginComponent}, {path: '', component:WineComponent, canActivate:[AuthGuard]}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
