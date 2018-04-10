import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {HeroService} from '../service/userData.service';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpRetun: any;
  public name: string;
  public password: any;
  public email: any;
  public signupInfo:string;
  public userPostData = {
    'name': '',
    'password':'',
    'email':''
  };

  constructor(private hService:HeroService) { }

  ngOnInit() {
  }
  signup() {
      this.userPostData.name = this.name;
      this.userPostData.password = this.password;
      this.userPostData.email = this.email;
      console.log(this.userPostData);
      this.hService.addUsers(JSON.parse(JSON.stringify(this.userPostData)));
      this.signupInfo="User Register Sucessfully";

  }


}
