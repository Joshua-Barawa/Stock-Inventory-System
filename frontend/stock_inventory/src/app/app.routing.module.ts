import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router'

import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { LoginComponent } from "./login/login.component";
import { MerchantComponent } from "./merchant/merchant.component";
import { NavbarComponent } from "./navbar/navbar.component";


const routes: Routes =[
    {path:'admin',component:AdminDashboardComponent},
    // {path: 'navbar',component:NavbarComponent},
    {path: 'login',component:LoginComponent},
    {path: 'merchant',component:MerchantComponent},


    {path:'', redirectTo:'login', pathMatch:'full'},
    {path:'login', component:LoginComponent},
   

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents= [NavbarComponent,AdminDashboardComponent,LoginComponent,MerchantComponent]