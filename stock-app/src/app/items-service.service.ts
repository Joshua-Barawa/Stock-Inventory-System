import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpBackend, HttpClient, HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';

const addHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const requestHttpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ItemsServiceService {
  apiUrl: string = 'https://stock-inv.herokuapp.com/v1/product/add/';
  api2: string = 'https://stock-inv.herokuapp.com/v1/product/request/';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private httpClient: HttpClient) { }

   // Create new item
  postItem(items_received: string, items_in_stock: string, payment_status: string, items_spoiled: string, buying_price: any, selling_price: any): Observable<any> {
      return this.httpClient.post(this.apiUrl,{
        items_received, items_in_stock, payment_status, items_spoiled, buying_price, selling_price
      }, addHttpOptions);
  }

  //Request Item
  requestItem(supplier: string, email: string, date: string, items_needed: string, quantity: any): Observable<any> {
    return this.httpClient.post(this.apiUrl,{
      supplier, email, date, items_needed, quantity
        }, requestHttpOptions);
}
}