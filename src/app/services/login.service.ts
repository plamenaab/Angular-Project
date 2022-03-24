import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  isAdmin:boolean=false;
  
  isAdminLoggedin(){
    return new Promise(
      (resolve, reject) => {
        setTimeout(
          () =>{
            resolve(this.isAdmin);
          }
          ,1000)
      }
    );
  }

  loginAdmin(){
    this.isAdmin=true;
  }
  logoutAdmin(){
    this.isAdmin=false;
  }
  constructor() { }
}
