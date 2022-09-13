import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ApiCallService } from '../services/apiCall.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private apicallService: ApiCallService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        return this.apicallService.getDataWithPost('/login/IsLogin').pipe(map(
            response => {

                localStorage.setItem("isLogin", localStorage.getItem("isLogin") == null ? '0' : localStorage.getItem("isLogin")!.toString());

                
                if(localStorage.getItem("isLogin")!.toString()=='0'){
                    this.router.navigate(['login']);
                }

                return localStorage.getItem("isLogin")!.toString()=='1'?true:false;
            },
            (error: any) => {                              //Error callback
                console.error('error caught in component')
                return false;

                //throw error;   //You can also throw the error to a global error handler
            }
        ));

        // .map(response => {

        //     console.log(response)
        //     if (response.MessageType.toLocaleLowerCase() == 'error') {
        //         this.router.navigate(['login'])
        //         return false;
        //     }
        //     return true;

        // }).catch(err => Observable.of(false));




    }
}