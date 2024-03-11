
import { CanActivateFn ,ActivatedRouteSnapshot,Route,RouterStateSnapshot,UrlTree } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthenticationService } from './service/authentication.service';


Injectable({
  providedIn:'root'
})
export const authGuard: CanActivateFn = (route, state) => {
    return true;
};
