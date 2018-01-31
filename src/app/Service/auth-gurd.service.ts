import { Injectable } from '@angular/core';
import{ Router ,CanActivate,ActivatedRouteSnapshot,RouterStateSnapshot} from '@angular/router'
import { GetDataService } from './get-data.service';
import * as toastr from 'toastr';






@Injectable()
export class AuthGurdService {

  constructor(private _GetDataService : GetDataService,private _Router : Router) { 

  }


  canActivate(_RoutesActive: ActivatedRouteSnapshot,_state : RouterStateSnapshot) : boolean {

    if (this._GetDataService.isLoggedIn()) {
      return true;
    }    
    
    toastr.warning("You are not access this page without Login...!", 'Warning!');
    this._Router.navigateByUrl('Login');    
    return false;

    // return this.LoginUserCheck(_state.url);
    // return true;
  }

  

  // LoginUserCheck (url : string) : boolean {

  //   if (this._GetDataService.isLoggedIn()) {
  //     return true;
  //   }    
  //   else{
  //   toastr.warning("You are not access this page without Login...!", 'Warning!');
  //   this._Router.navigateByUrl('Login');    
  //   return false;
  //   }
    
  // }
} 
