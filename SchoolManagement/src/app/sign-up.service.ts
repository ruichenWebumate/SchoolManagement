import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { SignUpInformation } from './model/SignUpInformation';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-urlencoded'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignUpService {

  signUpUrl = "http://localhost:8080/php/signUp.php"

  constructor(
    private http: HttpClient
  ) { }

  signUpStudent(signUpInformation: SignUpInformation) {
    return this.http.post<any>(this.signUpUrl, signUpInformation, httpOptions);
  }
}
