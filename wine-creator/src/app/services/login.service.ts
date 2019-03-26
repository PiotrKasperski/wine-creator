import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private loginUrl = 'http://localhost:3000/auth/login';

  constructor(private http: HttpClient) {
  }
  login(user):Observable<User>{
    return this.http.post<User>(this.loginUrl, user);
  }

}
