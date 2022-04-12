import { Component, OnInit } from '@angular/core';
import { ItemsServiceService } from '../items-service.service'

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  authToken: any

  item = {
    items_received: '',
    items_in_stock: '',
    payment_status: '',
    items_spoiled: '',
    buying_price: '',
    selling_price: ''
  }

  isItemAdded = false

  constructor(private itemsService: ItemsServiceService) { }
  onAdd() {} 

  onAdditem() {const {items_received, items_in_stock, payment_status, items_spoiled, buying_price, selling_price } = this.item;
    this.itemsService.postItem(items_received, items_in_stock, payment_status, items_spoiled, buying_price, selling_price).subscribe(data => {
      console.log(data)
    })
  }
  ngOnInit(): void {

   
    
  }
}
