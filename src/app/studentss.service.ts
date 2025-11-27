import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentssService {

  constructor(private student:HttpClient) { }
  getstudent(){
    return this.student.get("https://6128991386a213001729f9df.mockapi.io/test/v1/student");
  }
}
