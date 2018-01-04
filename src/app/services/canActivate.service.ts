import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class CanActivateService implements CanActivate {

    constructor(private router: Router) { }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('loggedUser')) {
               return true;
        }else{
          // not logged in so redirect to login page with the return url
          this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
          return false;
        }
    }
  }

 