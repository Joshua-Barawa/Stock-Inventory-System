import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ClerkService } from './clerk.service';
import { Item } from './item';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  items!: Item[];
  item: Item = new Item();
  constructor(private clerkService: ClerkService, private route: Router,) {}

  ngOnInit(): void {
    this.clerkService.getClerk().subscribe(data => {
      console.log(data);
      this.items = data;
    })
    throw new Error('Method not implemented.');
  }
  title = 'clerk';

  itemDetails(id: number) {
    this.route.navigate(['items', id]);
    console.log(id);
  }
}
