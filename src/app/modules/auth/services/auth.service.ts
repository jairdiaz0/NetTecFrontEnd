import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly URL = environment.url;

  constructor(
    private _httpClient: HttpClient,
    private cookieService: CookieService
  ) { }

  /**Verifica si existe el token_session, en caso de existir lo elimina */
  checkSession(): void {
    if (this.cookieService.check(environment.tokenName)) {
      this.cookieService.delete(environment.tokenName, '/');
    }
  }
  
  validLogin(email: String, password: String) {
    return this.sendCredentials(email, password).toPromise();
  }

  /**Nos permite verificar si existe el usuario, en caso de existir se pone el tokken_session */
  private sendCredentials(email: String, password: String): Observable<any> {
    const body = { email, password }
    return this._httpClient.post(`${this.URL}/auth/logIn`, body).pipe(
      tap((responseOK: any) => {
        const { token } = responseOK;
        if (token) {
          this.cookieService.set(environment.tokenName, token, 1, '/');
        }
      })
    );
  }

  /**Función que nos retorna la promesa de validar el token */
  validSession() {
    return this.validToken().toPromise();
  }

  /**Función que nos permite validar el token ingresado (Especializado para el Guard) */
  private validToken(): Observable<any> {
    return this._httpClient.get(`${this.URL}/auth/getTokenInfo`);
  }

}
