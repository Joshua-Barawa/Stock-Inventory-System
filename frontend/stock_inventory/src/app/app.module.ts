import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms'

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




@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    // AdminDashboardComponent,
    // NavbarComponent,
    
  ],
  imports: [
   
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,


   
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
