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
    name: '',
    received: '',
    in_stock: '',
    spoiled: '',
    buying_price: 0,
    selling_price: 0
  }
  isItemAdded = false

  constructor(private itemsService: ItemsServiceService) { }
  onAdd() {} 

  onAdditem() {const {name, received, in_stock, spoiled, buying_price, selling_price } = this.item;
    this.itemsService.postItem(name, received, in_stock, spoiled, buying_price, selling_price).subscribe(data => {
      console.log(data)
    })
  }
  ngOnInit(): void {

   
    
  }
}