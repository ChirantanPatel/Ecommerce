import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Service/get-data.service';
import * as toastr from 'toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  GetCartList : any;
  TotalCart : number;
  
  constructor(private _getDataService : GetDataService) { }

  GetData(){

    // this._getDataService.GetCartList().subscribe();
    // this.TotalCart = this.GetCartList.length;

    this.GetCartList = this._getDataService.GetCartList();
    
    
  }

  ngOnInit() {
    this.GetData();
  }

  RemoveCart(x){
    this._getDataService.RemoveFromCart(x);
    toastr.success("Successfully Remove", 'success!');   
  }

  

}
