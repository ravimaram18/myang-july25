import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VehiclessService {

  constructor( private httpClient:HttpClient) { }
  getVehicles(){
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
  }

  getVehicle(id:string){
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  filterVehicles(term:string){
    return this.httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term);
  }
  sortVehicles(column:any,order:any){
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy="+column+"&order="+order);
  }

  pageVehicles(limit:any,page:any){
    return this.httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit="+limit+"&page="+page);
  }
  
  
  deleteVehicles(id:string){
    return this.httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }

  createVehicle(vehicle:any){
    return this.httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction",vehicle);
  }

  updateVehicle(vehicle:any,id:any){
    return this.httpClient.put("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/"+id,vehicle);
  }
}
