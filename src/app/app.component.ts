import { Component } from '@angular/core';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hello Angular!';
  loremipsum = 'Lorem ipsum dolor';
  name = "John Dow";
  myBgColor='pink';
  testValue = 10;

  constructor(
    private loginService: LoginService
  ){

  }
  loginAdmin(){
    this.loginService.loginAdmin();
  }
  logoutAdmin(){
    this.loginService.logoutAdmin();
  }
}
