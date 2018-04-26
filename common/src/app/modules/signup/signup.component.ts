import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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
    'email':'',
    'mobile':''
  };
  public domainUrl = window.location.href;
   constructor() { }

  ngOnInit() {
  }
  signup() {
     console.log('kjkkkkkkkkkkkkkkkk',this.domainUrl === 'http://localhost:4300' );
     console.log('lllllllllllllll',this.domainUrl === 'http://localhost:4400' );
  }


}
