import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {LoginService} from "./login.service";
import {map} from "rxjs/operators";
import {User} from "../user";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject : BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http:HttpClient, private loginService: LoginService) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser  = this.currentUserSubject.asObservable();
  }

  public get currentUserValue(): User{
    return this.currentUserSubject.value;
  }

  login(username: string, password: string){
    return this.loginService.login({username: username, password: password}).pipe(map(user =>{
      if (user && user.token){
        localStorage.setItem('currentUser', JSON.stringify(user));
        console.log('user saved');
        this.currentUserSubject.next(user);
      }
      return user;
    }))
  }
  logout(){
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
