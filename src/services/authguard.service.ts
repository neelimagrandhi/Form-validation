import { Injectable } from "@angular/core";
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn : "root"
})

export class Authguardservice implements CanActivate{
    canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        throw new Error("Method not implemented.");
    }

    CanActivate(){
        if(localStorage.getitem("token")=="peers123")
        return true;
        else
        return false;
    }
}
