import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Service/get-data.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-get-list',
  templateUrl: './get-list.component.html',
  styleUrls: ['./get-list.component.css']
})
export class GetListComponent implements OnInit {

  GetPhoneList : any;

  constructor(private _getDataService : GetDataService,private router : Router) { }

  


  GetData(){    
   // debugger
    this.GetPhoneList = this._getDataService.GetMIPhoneList();
    
  }

  CheckOut(x){  

    let a = this._getDataService.AddToCart(x);

    if(a == true)
    {
      this.router.navigate(['CheckOut']);
    }
    else{
      toastr.warning("This Item is already added into cart...!", 'Warning!');   
    }
  }

  ngOnInit() {
    this.GetData();
  }
}
