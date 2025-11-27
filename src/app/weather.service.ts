import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private weather:HttpClient) { }
  getweathers(){
     return this.weather.get('https://6128991386a213001729f9df.mockapi.io/test/v1/principals');
  }
}
