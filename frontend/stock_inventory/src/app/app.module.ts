import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import { NavbarComponent } from './navbar/navbar.component';
// import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';

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

import {AppRoutingModule,routingComponents} from './app.routing.module'
import { AdministratorService } from './administrator.service';
import { TokenStorageService } from './token-storage.service';
import { AuthService } from './auth.service';
import { AuthServices } from './auth.service';

import { AuthInterceptor } from './interceptor/auth.interceptor';
// import { ExclInterceptor } from './interceptor/excl.interceptor';



@NgModule({
  declarations: [
    AppComponent,routingComponents
  ],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
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
  providers: [AdministratorService,AuthService,AuthServices,TokenStorageService,
    {provide:HTTP_INTERCEPTORS,useClass:AuthInterceptor,multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
