import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'login-app';
  usernameParent : String = "";
  passwordParent : String = "";

  getData(data){
    this.usernameParent=data.user;
    this.passwordParent=data.pass;
  }
}
