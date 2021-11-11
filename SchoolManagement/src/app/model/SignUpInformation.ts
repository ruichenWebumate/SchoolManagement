import { LoginInformation } from './LoginInformation';
import { Student } from './Student';

export interface SignUpInformation {
  loginInformation: LoginInformation;
  student: Student;
}
