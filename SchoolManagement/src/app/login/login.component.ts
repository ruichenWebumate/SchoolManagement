import { Component, OnInit } from '@angular/core';

import { LoginServiceService } from '../login-service.service';

import { LoginInformation } from '../model/LoginInformation';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string = '';
  password: string = '';

  constructor(
    private loginService: LoginServiceService,
  ) { }

  ngOnInit(): void {
  }

  login() {
    let loginInformation: LoginInformation = {
      username: this.username,
      password: this.password
    }
    this.loginService.login(loginInformation);
  }

}
