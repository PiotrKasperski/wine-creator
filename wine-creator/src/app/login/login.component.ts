import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {LoginService} from "../services/login.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private loginService: AuthService) { }

  ngOnInit() {
  }

  login(){
    console.log(this.loginForm.value);
    let auth = this.loginService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe();
    console.log(auth);
  }

}
