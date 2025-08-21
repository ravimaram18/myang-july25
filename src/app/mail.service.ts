import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private _message:HttpClient) { }
  getmails():Observable<any>{
    return this._message.get('https://jsonplaceholder.typicode.com/todos');
  }
}
