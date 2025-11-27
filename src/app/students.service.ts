import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private _stu:HttpClient) { }
  getstudents():Observable<any>{
    
   return this._stu.get('https://6128991386a213001729f9df.mockapi.io/test/v1/student');
    }
}
