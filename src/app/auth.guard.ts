import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ControlaccesoService } from './services/controlacceso.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private controlacceso:ControlaccesoService,
    private router:Router){

    }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const result = this.controlacceso.comprobarUsuario()
      result.then(resp=>{
        if(!resp){
          //TODO
          this.router.navigateByUrl('home');
        }
      });

    return result.then();
  }
}
