import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as toastr from 'toastr';
import { GetDataService } from '../Service/get-data.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _getDataService : GetDataService,private router : Router) { }

  LoginUserData : any;
    
    Login : any;
    UserName : string;
  Password : string;

  ngOnInit() {
  }


  LoginUser(Login) {

    

    this.LoginUserData = this._getDataService.LoginUser(Login.UserName,Login.Password);
      debugger
      if(this.LoginUserData != undefined){
        this.router.navigate(['MIPhoneList']);   
      }
      else{
        toastr.warning("User Name and Password Wrong..!!", 'Warning!');   
      }
    
  }

}
