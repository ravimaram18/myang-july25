import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FlipkartfakeService {

  constructor(private _flip:HttpClient) {}
    getflip():Observable<any>{
        return this._flip.get('https://fakestoreapi.com/products');
    }
   
}


