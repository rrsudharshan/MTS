import { Component, OnInit } from '@angular/core';
import {Router}              from '@angular/router';
import {HeroService}         from '../service/userData.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  public usersData :any;
  public usersDetails :any;

  constructor(private router: Router,private hService:HeroService) {
  }

  ngOnInit() {
    this.usersData  = this.hService.getUsers();
    this.usersDetails = JSON.stringify(this.usersData);

  }

}
