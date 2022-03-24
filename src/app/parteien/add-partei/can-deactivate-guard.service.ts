import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

export interface CanComponentDeactivate{
  canDeactivate: ()=> boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree>
}


@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuardService implements CanDeactivate<CanComponentDeactivate> {

  canDeactivate(
    component: CanComponentDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState: RouterStateSnapshot
    ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
      //console.log('service deactivate');
      return component.canDeactivate();
      //return this.permissions.canDeactivate(this.currentUser, route.params.id);
    }
  constructor() {
    // console.log('guard constructor');
   }
}
