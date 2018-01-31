import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../Service/get-data.service';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  constructor(public _getDataService : GetDataService) { }

  TotalCart : any;
  

  ngOnInit() {    
    // this.TotalCart = this._getDataService.AddToCartList.length;
  }

  Logout() 
  {
    return this._getDataService.LogoutUser();
  }

  
  

}
