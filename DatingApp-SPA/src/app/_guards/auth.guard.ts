import { AlertifyService } from './../_services/alertify.service';
import { AuthService } from './../_services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService:AuthService, private alerify:AlertifyService,private router:Router){ }
  canActivate():boolean{
    if(this.authService.loggedIn()){
    return true;
    }

    this.alerify.error('No Access, please login');
    this.router.navigate(['\home']);
    return false;
  }
  
}
