import {Injectable} from "@angular/core";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {AuthService} from "../services/auth.service";
import {Observable} from "rxjs";

@Injectable()
export class JwtInterceptors implements HttpInterceptor {
  constructor(private authService: AuthService){};
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    let currentUser = this.authService.currentUserValue;
    if(currentUser && currentUser.token){
      request =request.clone({setHeaders:{
        Authorization: currentUser.token
        }});
    }
    return next.handle(request);
  }
}
