import { Component, OnInit } from '@angular/core';
import { RequestsService } from '../requests.service'

@Component({
  selector: 'app-requests',
  templateUrl: './requests.component.html',
  styleUrls: ['./requests.component.css']
})
export class RequestsComponent implements OnInit {

  authToken: any

  item = {
    supplier: '',
    email: '',
    date: '',
    item_needed: '',
    quantity: ''
  }

  isItemRequested = false
  
  constructor(private requestsService: RequestsService) { }
  onRequest() {} 

  onRequestitem() {const {supplier, email, date, item_needed, quantity} = this.item;
    this.requestsService.requestItem(supplier, email, date, item_needed, quantity).subscribe(data => {
      console.log(data)
    })
  }

  ngOnInit(): void {
  }


}
