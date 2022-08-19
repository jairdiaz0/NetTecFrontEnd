import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable()
export class InjectTokenInterceptor implements HttpInterceptor {

  constructor(private cookieService:CookieService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let newRequest = request;
    try {
      const token = this.cookieService.get(environment.tokenName);
      newRequest=request.clone({
        setHeaders:{
          authorization: `Bearer ${token}`
        }
      })
    } catch (error) {
      console.log('Error en Interceptor InjectSession: ', error);
    }
    return next.handle(newRequest);
  }
}
