export class UserModel {


  name: string;
  password:string;
  email:string;
  mobile:string;

  static createUser (x:any): UserModel {
    const obj = new UserModel();

    obj.email = x.email || '';
    obj.mobile = x.mobile || '';
    obj.password = x.password || '';
    obj.name = x.name || '';

    return obj;
  }

}


