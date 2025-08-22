import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PinterestService {

  constructor(private pinter:HttpClient) { }
  getpintere():Observable<any>{
      return this.pinter.get('https://picsum.photos/v2/list?page=1&limit=100');
    }
}
