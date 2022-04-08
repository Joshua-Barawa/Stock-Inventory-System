import { Component, OnInit } from '@angular/core';
import {Chart} from 'chart.js';
import { AdministratorService } from '../administrator.service'; 
import { AuthService } from '../auth.service';
import {take,tap} from "rxjs"


@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
myData:any;
myData$:any

public users:any=[] 
public clerks:any=[]

constructor(private _adminService:AdministratorService,private authService: AuthService) { }

ngOnInit(): void {

this.myData$=this._adminService
.getData()
.pipe(tap((data)=>
    (this.myData=data)));

// this._adminService.getUser().subscribe(data => this.users =data);

console.log(this.myData )

const ct = document.getElementById('mChart');
const ctx = document.getElementById('myChart');
const myChart = new Chart('myChart', {
    type: 'line',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          // y: {
          //     beginAtZero: true
          // }
      }
  }
});

  
  const myChat = new Chart('mChart', {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
      }]
  },
  options: {
      scales: {
          // y: {
          //     beginAtZero: true
          // }
      }
  }
});
  }
    

  form: any = {
    username: null,
    full_name: null,
    email: null,
    business:null,
    avatar:null,
    password: null,
    password2: null,
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  onFetchAllClerks(){}

  
 
  onSubmit(): void {
    const { username,full_name, email,business,avatar,password, password2 } = this.form;
    this.authService.register(username,full_name, email,business,avatar,password, password2).subscribe(
      data => {
        this.isSuccessful = true;
        this.isSignUpFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignUpFailed = true;
        console.log('---',err)
      }
    );

  }
  

}