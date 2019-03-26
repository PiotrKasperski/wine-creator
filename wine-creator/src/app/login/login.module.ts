import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import {MatCardModule, MatFormFieldModule, MatInputModule, MatTabsModule} from "@angular/material";
import {ReactiveFormsModule} from "@angular/forms";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatTabsModule,
    HttpClientModule,
    MatInputModule
  ],
  exports:[LoginComponent]
})
export class LoginModule { }
