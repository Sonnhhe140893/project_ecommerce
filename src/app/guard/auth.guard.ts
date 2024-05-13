
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
    private AuthenSV:  AuthenticationService ,
    private router :Router ,


     ){

  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    if(this.AuthenSV.isloggedIn()){
      return true;
    }else{
      // window.location.href = '/login';
      this.router.navigate(['/login']);
      return false;
    }
  }
}



