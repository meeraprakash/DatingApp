import { AuthService } from './../_services/auth.service';
//import { ActivatedRouteSnapshot } from '@angular/router';
// import { catchError } from 'rxjs/operators';
// import { UserService } from './../_services/user.service';
// import { Observable, of } from 'rxjs';
// import { ActivatedRouteSnapshot, Router,Resolve } from '@angular/reuter';
// import { AlertifyService } from './../_services/alertify.service';
// import { Injectable } from '@angular/core';
// import {User} from '../_models/user';

import {Injectable} from '@angular/core';
import {User} from '../_models/user';
import {Resolve, Router,ActivatedRouteSnapshot} from '@angular/router';
import {UserService} from '../_services/user.service';
import {AlertifyService} from '../_services/alertify.service';
import {Observable,of} from 'rxjs';
import {catchError} from 'rxjs/operators';


@Injectable()
export class MemberEditResolver implements Resolve<User>{
    constructor(private router:Router, private alertify:AlertifyService,
        private userService: UserService,private authService:AuthService){}

    resolve(route: ActivatedRouteSnapshot): Observable<User>{
        return this.userService.getUser(this.authService.decodedToken.nameid).pipe(
            catchError(error =>{
                this.alertify.error('Problem retrieving your data');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
    
}