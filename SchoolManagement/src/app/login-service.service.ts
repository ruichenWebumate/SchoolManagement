import { Injectable } from '@angular/core';

import { LoginInformation } from './model/LoginInformation';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor() { }

  login(loginInformation: LoginInformation) {
    console.log(loginInformation.username);
    console.log(loginInformation.password);
  }
}
