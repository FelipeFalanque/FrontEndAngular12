import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router } from '@angular/router';
import { TokenHelper } from 'src/app/helpers/token-helper';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private _router: Router, private _tokenHelper: TokenHelper) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    if (this._tokenHelper.isUserLoggedIn()) {
      return true;
    }
    else {
      this._router.navigate(['login']);
      return false;
    }

  }

}
