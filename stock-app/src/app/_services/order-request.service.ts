import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenStorageService } from '../_services/token-storage.service'

const ORDER_REQUESTS_API = 'https://stock-inv.herokuapp.com/v1/product/view-requests/';

const APPROVE_REQUEST_API = "https://stock-inv.herokuapp.com/v1/product/view-requests/approved";
const DECLINE_REQUEST_API = "https://stock-inv.herokuapp.com/v1/product/view-requests/n-approved";


@Injectable({
  providedIn: 'root'
})
export class OrderRequestService {

  constructor(private http: HttpClient,private tokenStorage: TokenStorageService) { }
  getOrderRequests():Observable<any>{
    return this.http.get(ORDER_REQUESTS_API, {
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }
  approveOderRequests():Observable<any>{
    return this.http.post(`${APPROVE_REQUEST_API}`,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }
  declineOderRequests():Observable<any>{
    return this.http.post(DECLINE_REQUEST_API,{
      headers: new HttpHeaders({ 'Content-Type': 'application/json', 'Authorization': `Token ${this.tokenStorage.getToken()}` })
    });
  }

  }
