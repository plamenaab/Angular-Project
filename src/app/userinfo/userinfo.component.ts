import { Component } from '@angular/core';

@Component({
  selector: 'app-userinfo',
  templateUrl: './userinfo.component.html',
  styleUrls: ['./userinfo.component.css']
})
export class UserinfoComponent {
  username: string = "";
  userinfo = "";
  showUserInfo = false;
  constructor() { }
  getUserInfo() {
    this.userinfo = `${this.username} information: Fullname: Admin Admin / Status:admin`;
    this.showUserInfo = true;
  }

}
