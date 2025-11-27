import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent {
  weatherss:any={};
    
    constructor(private weatherServices:WeatherService){
      weatherServices.getweathers().subscribe(
  
        (data:any)=>{
          this.weatherss=data;
  
        },
        (error:any)=>{
          alert("Internal Server Error");
        }
  
      )
    }
    getDotColor(temp: number): string {
  if (temp < 0) return 'blue';
  if (temp <= 30) return 'yellow';
  if (temp <= 35) return 'green';
  return 'red';
}

weather = {
  temperature: 40.0,
  time: '2025-11-12T16:45',
  is_day: 1
};
}


