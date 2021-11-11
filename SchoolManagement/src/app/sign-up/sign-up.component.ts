import { Component, OnInit } from '@angular/core';
import { SignUpInformation } from '../model/SignUpInformation';
import { SignUpService } from '../sign-up.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  name: string = '';
  email: string = '';
  username: string = '';
  password: string = '';

  constructor(
    private signUpService: SignUpService,
  ) { }

  ngOnInit(): void {
  }

  signUp() {
    let signUpInformation: SignUpInformation = {
      loginInformation: {
        username: this.username,
        password: this.password
      },
      student: {
        Email: this.email,
        Name: this.name,
        StudentId: 'temp',
        ClassEnrolled: null
      }
    };
    this.signUpService.signUpStudent(signUpInformation).subscribe( data => {
      console.log("received: ", data);
    });
  }

}
