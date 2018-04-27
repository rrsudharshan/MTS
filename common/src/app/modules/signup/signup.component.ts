import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserModel} from '../../models/user-model';

@Component({
  selector: 'app-login',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public user = UserModel.createUser({});


  public domainUrl = window.location.href;
   constructor() { }

  ngOnInit() {
    delete this.user.mobile;

     console.log(this.user);

  }
  signup() {
    console.log(this.user );
  }


}
