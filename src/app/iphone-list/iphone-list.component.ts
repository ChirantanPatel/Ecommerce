import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Service/get-data.service';
import * as toastr from 'toastr';


@Component({
  selector: 'app-iphone-list',
  templateUrl: './iphone-list.component.html',
  styleUrls: ['./iphone-list.component.css']
})
export class IphoneListComponent implements OnInit {

  GetIPhoneList : any;

  constructor(private _getDataService : GetDataService,private router : Router) { }


  GetData(){
    this.GetIPhoneList = this._getDataService.GetIphonePhoneList();

  }

  ngOnInit() {
    this.GetData();
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

}
