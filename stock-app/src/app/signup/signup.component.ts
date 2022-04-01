import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormGroup, FormBuilder} from "@angular/forms";
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public signupForm !: FormGroup;

  constructor(private formBuilder : FormBuilder, private http : HttpClient, private router: Router ) { }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      username :[''],
      fullname :[''],
      email :[''],
      businessname :[''],
      password :[''],
      confirmpassword:['']
      
    })
  }
signUp(){
  this.http.post<any>("https://stock-inv.herokuapp.com/v1/account/register/", this.signupForm.value)
  .subscribe(res=> {
    alert("signuo successful")
    this.signupForm.reset;
    this.router.navigate(['login'])

  },err=>{
    alert("oops something went wrong")
  })
}
}
