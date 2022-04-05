import { NgModule } from "@angular/core";
import {Routes,RouterModule} from '@angular/router'

import { AdminDashboardComponent } from "./admin-dashboard/admin-dashboard.component";
import { NavbarComponent } from "./navbar/navbar.component";

const routes: Routes =[
    {path:'admin',component:AdminDashboardComponent},
    {path: 'navbar',component:NavbarComponent}
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents= [NavbarComponent,AdminDashboardComponent]