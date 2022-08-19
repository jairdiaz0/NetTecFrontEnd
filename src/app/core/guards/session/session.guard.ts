import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UsuarioModel } from '@core/models/api/usuarios.model';
import { AuthService } from '@modules/auth/services/auth.service';
import { ConnectionDBService } from '@shared/services/connection-db.service';
import { CookieService } from 'ngx-cookie-service';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  public user?:UsuarioModel;
  constructor(
    private cookieService: CookieService, 
    private router:Router,
    private authService: AuthService
    ){  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): 
      Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.checkToken();
  }

  private checkToken(){
    return new Promise<boolean>(
      async (resolve, reject) =>{
        try {
          const data = await this.authService.validSession();
          if(data){
            this.user = data;
            resolve(true);
          }else{
            this.goToAuth();
          }
        } catch (error) {
          this.goToAuth();
          reject(false);
        }
      }
    );
  }

  private goToAuth(){
    this.router.navigate(['/', 'auth']);
  }
  
}
