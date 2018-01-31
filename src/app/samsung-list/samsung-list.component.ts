import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Service/get-data.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-samsung-list',
  templateUrl: './samsung-list.component.html',
  styleUrls: ['./samsung-list.component.css']
})
export class SamsungListComponent implements OnInit {

 
  GetPhoneList : any;

  constructor(private _getDataService : GetDataService,private router : Router) { }

  GetData(){
     this.GetPhoneList = this._getDataService.GetSamsungPhoneList();
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
