import {Component, OnInit} from '@angular/core';
import {Router}            from '@angular/router';
import {HeroService}       from '../service/userData.service';

@Component({selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']})
export class LoginComponent implements OnInit {
  public name: string;
  public password: string;
  public finalData: any;
  public loginInfo: string;
  public usersData :any;

  ngOnInit() {
  }

  constructor(private router: Router,private hService:HeroService) {
  }

  login() {
    var name = this.name;
    var password = this.password;
     this.usersData  = this.hService.getUsers();
     var data=this.usersData.filter(function (data) {
       return data.name==name && data.password == password;

     });

     if(data.length>0){
       this.loginInfo = "Login Sucessfully";
       this.router.navigateByUrl('/userDetails');

     }else {
       this.loginInfo = "User not register"

     }

  }
  xyz() {
    alert('dfdfd');
    this.router.navigateByUrl('/register');
  }

}
