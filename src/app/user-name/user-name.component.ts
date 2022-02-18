import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-name',
  templateUrl: './user-name.component.html',
  styleUrls: ['./user-name.component.css']
})
export class UserNameComponent {
  userInfo="";
  userName: string="";
  showUserInfo = false;
  getUserInfo(){
    this.userInfo = `${this.userName} information:Fullname: / Status: admin`;
  }

}
