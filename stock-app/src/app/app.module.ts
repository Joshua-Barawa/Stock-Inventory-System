import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';




import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';

import {CommonModule } from '@angular/common';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDividerModule} from '@angular/material/divider';
import { OrderRequestComponent } from './order-request/order-request.component';
import { RequestsComponent } from './requests/requests.component';
import { ItemsComponent } from './items/items.component';

// import {AppRoutingModule} from '../a';;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    DashboardComponent,
    NavbarComponent,
    OrderRequestComponent,
    RequestsComponent,
    ItemsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
     // AppRoutingModule,
     MatDividerModule,
     CommonModule,
     MatTabsModule,
     MatSidenavModule,
     MatToolbarModule,
     MatIconModule,
     MatButtonModule,
     MatListModule,
     MatMenuModule,
     MatTableModule,
     MatSortModule,
     MatFormFieldModule,
     MatInputModule,
     MatPaginatorModule
    
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
