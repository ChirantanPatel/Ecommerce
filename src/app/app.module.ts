import { AuthGurdService } from './Service/auth-gurd.service';
import { GetDataService } from './Service/get-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes , RouterModule,CanActivate} from '@angular/router'   
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpModule } from '@angular/http';
import { CommonComponent } from './common/common.component';
import { GetListComponent } from './get-list/get-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { IphoneListComponent } from './iphone-list/iphone-list.component';
import { SamsungListComponent } from './samsung-list/samsung-list.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CommonComponent,
    GetListComponent,
    CheckoutComponent,
    IphoneListComponent,
    SamsungListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    // AdminModule,
    RouterModule.forRoot([
      { path : 'Login',component: LoginComponent },      
      { path : '',component: CommonComponent,children : 
        [
          { path : 'MIPhoneList',component: GetListComponent ,canActivate : [AuthGurdService] },
          { path : 'IphoneList',component: IphoneListComponent,canActivate : [AuthGurdService] },
          { path : 'SamsungList',component: SamsungListComponent,canActivate : [AuthGurdService] },
          { path : 'CheckOut',component: CheckoutComponent,canActivate : [AuthGurdService]},
          { path : '',redirectTo:'MIPhoneList' , pathMatch: 'full'}
        // { path: '', redirectTo: 'ItemsList', pathMatch: 'full'},
         ] 
      },
     
      
      { path : '',redirectTo:'Login' , pathMatch: 'full'},
      { path : '**',redirectTo:'Login' , pathMatch: 'full' },

      
    ]),

    
  ],
  providers: [
    GetDataService,
    AuthGurdService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
