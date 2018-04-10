import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor() { }
  users=[]=[];

  addUsers(user){
    this.users.push((user));
  }
  getUsers(): Array<any>{

    return this.users;
  }

}
