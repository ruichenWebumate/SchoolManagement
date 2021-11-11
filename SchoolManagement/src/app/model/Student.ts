import { Class } from './Class';

export interface Student {
  Name: string;
  Email: string;
  StudentId: string;
  ClassEnrolled: Class[] | null;
}
