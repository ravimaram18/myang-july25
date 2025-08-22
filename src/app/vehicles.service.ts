import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VehiclesService {

  constructor( private _httpClient:HttpClient) { }
  getVehicles():Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction');
  }
   getfilteredVehicles(term:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter='+term);
  }
  getsorteredVehicles(column:any,order:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy='+column+"&order="+order);
  }
  getpaginatedVehicles(limit:any,page:any):Observable<any>{
    return this._httpClient.get('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit='+limit+"&page="+page);
  }
  deleteVehicles(id:any):Observable<any>{
    return this._httpClient.delete('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/'+id);
  }
  createVehicles(data:any):Observable<any>{
    return this._httpClient.post('https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction',data);
  }
}
