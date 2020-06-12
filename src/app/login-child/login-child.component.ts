import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-login-child',
  templateUrl: './login-child.component.html',
  styleUrls: ['./login-child.component.css']
})
export class LoginChildComponent  {
  usernameChild: String= "";
  passwordChild: String= "";

  @Output() data : EventEmitter<{}>=new EventEmitter();

  sendData() {
    this.data.emit({"user":this.usernameChild,"pass":this.passwordChild});
    console.log(this.usernameChild); 
    console.log(this.passwordChild); 
  }

}
