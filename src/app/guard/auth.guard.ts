
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,Router, CanActivateFn } from '@angular/router';
import { promises } from 'dns';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../service/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate  {

  constructor(
    private AuthenSV:  AuthenticationService ,
    private router :Router ,
    private toastr: ToastrService,

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

// export const authenGuard: CanActivateFn = (route: any, state: any) => {
//   if(inject(AuthenticationService).isloggedIn())
//     return true;
//   else {
//     inject(Router).navigate(['/login']);
//     return false;
//   }

  // if (AuthenSV.isloggedIn()) {
  //   return true;
  // } else {
  //   // window.location.href = '/login';
  //   this.router.navigate(['/login']);
  //   return false;
  // }
// };

