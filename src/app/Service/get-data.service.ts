import {Http,Response, Headers, RequestOptions} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';


@Injectable()
export class GetDataService {
  
  EmployeeDataList : any;
  MIPhoneList : any;
  IPhoneList : any;
  SamsungPhoneList : any;
  

  AddToCartList : any = [];
  TotalCart : number;
  CurrentUserLogin : any;
 
  AdminCurrentUserLogin : any;

  

  constructor(private http : Http) { 


    this.EmployeeDataList = [
        {ID : 1, FirstName : 'Chirantan',MiddleName : 'Hasmukhbhai',LastName : 'Patel',UserName : 'chiko',Password : '369',MobileNo : '12346578',Gender : 'Male', DateOfBirth : '07/07/2018'},
        {ID : 2, FirstName : 'Jemin',MiddleName : 'Bhadreshbhai',LastName : 'Patel',UserName : 'jemin',Password : '963',MobileNo : '12346578',Gender : 'Male', DateOfBirth : '07/07/2018'},
        {ID : 3, FirstName : 'Pavitra',MiddleName : 'Hasmukhbhaibhai',LastName : 'Patel',UserName : 'a',Password : 'a',MobileNo : '12346578',Gender : 'Female', DateOfBirth : '07/07/2018'}
      ];

    this.MIPhoneList = [
      {ID : 4, Brand : 'MI',Model : 'Mix 2',image : 'http://images.fonearena.com/blog/wp-content/uploads/2017/03/Xiaomi-MI-MIX-2-leak.jpg',Price : '35000'},
      {ID : 5, Brand : 'MI',Model : 'Max 2',image : 'https://drop.ndtv.com/TECH/product_database/images/525201714016PM_635_xiaomi_mi_max_2.jpeg',Price : '16000'},
      {ID : 6, Brand : 'MI',Model : 'A1',image : 'https://static.toiimg.com/photo/60401756/.jpg',Price : '15000'},
      {ID : 7, Brand : 'MI',Model : 'Note 4',image : 'https://i.gadgets360cdn.com/large/xiaomi_redmi_note_4_grey_small_1509711829294.jpg',Price : '13000'},
      {ID : 8, Brand : 'MI',Model : 'Redmi Y1',image : 'http://images.fonearena.com/blog/wp-content/uploads/2017/11/Xiaomi-Redmi-Y1-Lite.jpg',Price : '9000'},
      {ID : 9, Brand : 'MI',Model : 'Redmi Y1 Lite',image : 'http://images.fonearena.com/blog/wp-content/uploads/2017/11/Xiaomi-Redmi-Y1-Lite.jpg',Price : '7000'},
      {ID : 10, Brand : 'MI',Model : 'Redmi 4',image : 'http://st1.bgr.in/wp-content/uploads/2016/08/ec51db058e49402fe4fed7678757ed29_375x500_1.jpg',Price : '7000'},
      {ID : 11, Brand : 'MI',Model : 'Redmi 5A',image : 'https://cdn2.gsmarena.com/vv/bigpic/xiaomi-redmi-5a.jpg',Price : '5000'},

    ];


    

    this.IPhoneList = [

      {ID : 12, Brand : 'Iphone',Model : 'iphone 6',image : 'http://technave.com/data/files/mall/article/small_201509100444196263.jpg',Price : '25000'},
      {ID : 13, Brand : 'Iphone',Model : 'iphone SE',image : 'http://www.three.co.uk/static/images/device_pages/MobileVersion/Apple/iPhone_SE/Space_Grey/desktop/2.jpg',Price : '20000'},
      {ID : 14, Brand : 'Iphone',Model : 'iphone x',image : 'https://www.att.com/catalog/en/skus/images/apple-iphone%20x-space%20gray-450x350.png',Price : '100000'},
      {ID : 15, Brand : 'Iphone',Model : 'iphone 8',image : 'https://drop.ndtv.com/TECH/product_database/images/913201715733AM_635_iphone_8.jpeg',Price : '50000'},
      {ID : 16, Brand : 'Iphone',Model : 'iphone 7',image : 'https://i.ebayimg.com/images/g/tFwAAOSwYIxX~Pgy/s-l500.jpg',Price : '40000'},
      {ID : 17, Brand : 'Iphone',Model : 'iphone 5',image : 'https://images-na.ssl-images-amazon.com/images/I/41f7eUYfl-L._SL500_AC_SS350_.jpg',Price : '20000'},
      {ID : 18, Brand : 'Iphone',Model : 'iphone 4',image : 'http://img.bfmtv.com/c/1256/708/20c/13a97332d89e06d863500a0010508.jpg',Price : '16000'},
      {ID : 19, Brand : 'Iphone',Model : 'iphone 4S',image : 'https://ssli.ebayimg.com/images/g/PZMAAOSwd0BVxRHx/s-l640.jpg',Price : '10000'},
      
    ];

    this.SamsungPhoneList = [

      {ID : 21, Brand : 'Samsung',Model : 'samsung J3',image : 'https://cdn.pocket-lint.com/r/s/320x/assets/images/141353-phones-news-samsung-s-new-galaxy-j-series-phones-coming-to-the-uk-soon-image1-2QAcamUPIr.jpg',Price : '10000'},
      {ID : 22, Brand : 'Samsung',Model : 'samsung One 5 Pro',image : 'https://drop.ndtv.com/TECH/product_database/images/7122016103958AM_635_samsung_galaxy_on5_pro.jpeg',Price : '7000'},
      {ID : 23, Brand : 'Samsung',Model : 'samsung J 5 Pro',image : 'https://images-na.ssl-images-amazon.com/images/I/412IAheiG5L._SX425_.jpg',Price : '15500'},
      {ID : 24, Brand : 'Samsung',Model : 'samsung J 7',image : 'https://i5.walmartimages.com/asr/7eb5cec9-f1cc-4b6c-9ee6-559e17ac6932_1.c97d588c429128c697696ba62c014a56.jpeg',Price : '20000'}


    ];


    this.AddToCartList = [
       {ID : 24, Brand : 'Samsung',Model : 'samsung J 7',image : 'https://i5.walmartimages.com/asr/7eb5cec9-f1cc-4b6c-9ee6-559e17ac6932_1.c97d588c429128c697696ba62c014a56.jpeg',Price : '20000'}
    ]

  }


    GetMIPhoneList() {
      return this.MIPhoneList;
    }
  

    GetIphonePhoneList()  {      
        return this.IPhoneList;
      }

      GetSamsungPhoneList()  {      
        return this.SamsungPhoneList;
      }

      
    
    

      AddToCart(x){

        let checkcart =  this.AddToCartList.find(obj => obj.ID == x.ID);

        if(checkcart != undefined){
          return false;
        }
        else{
          this.AddToCartList.push(x); 
          this.TotalCart = this.AddToCartList.length;
          return true;
        }
        
      }


      RemoveFromCart(x){
        var index = this.AddToCartList.indexOf(x);
        this.AddToCartList.splice(index,1);
        this.TotalCart = this.AddToCartList.length;
      }

      GetCartList()  {      
         return this.AddToCartList;
      }

    LoginUser(UserName : string,Password : string) {    
      debugger
      let User =  this.EmployeeDataList.find(obj => obj.UserName == UserName && obj.Password == Password);
      this.CurrentUserLogin = User;
      return User;  
    } 

 
    // GetDataByUser(ID : string) {    
    //   return  this.EmployeeDataList.find(obj => obj.ID == ID);      
    // }

    isAuthenticated(){
      return !!this.CurrentUserLogin;
    }


  
    

LogoutUser(): void {
  this.CurrentUserLogin = null; 
}








  private handleError(error: Response) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

  isLoggedIn(): boolean {

    try {
      const CurrentUser: any = this.CurrentUserLogin;
      if (CurrentUser) {
        this.CurrentUserLogin = CurrentUser;
        return true;
      }else{
        return false
      }
    } catch(e)   {
      return false;
    }
  }
 

}
