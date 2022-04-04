import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClerkService {
  public baseUrl = "https://stock-inv.herokuapp.com/v1/product/add/"

  constructor(private httpClient: HttpClient) { }

  // Create a get request method to fetch data from API
  public getClerk(): Observable<any> {
    return this.httpClient.get(this.baseUrl);
  }
}
