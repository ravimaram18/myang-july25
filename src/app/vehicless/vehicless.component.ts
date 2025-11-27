import { Component } from '@angular/core';
import { VehiclessService } from '../vehicless.service';

@Component({
  selector: 'app-vehicless',
  templateUrl: './vehicless.component.html',
  styleUrls: ['./vehicless.component.css'],
})
export class VehiclessComponent {
  vehicles: any = [];
  constructor(private vehiclessService: VehiclessService) {
    vehiclessService.getVehicles().subscribe(
      (data: any) => {
        this.vehicles = data;
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }
  term: string = '';
  filterVehicles() {
    this.vehiclessService.filterVehicles(this.term).subscribe(
      (data: any) => {
        this.vehicles = data;
        
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }
  column:string="";
  order:string="";
  sort() {
    this.vehiclessService.sortVehicles(this.column, this.order).subscribe(
      (data: any) => {
        this.vehicles = data;
        
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }
  limit:number=0;
  pagenumber:number=0;
  pagenation() {
    this.vehiclessService.pageVehicles(this.limit, this.pagenumber).subscribe(
      (data: any) => {
        this.vehicles = data;
        
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }



  deleteVehicle(id: string) {
    this.vehiclessService.deleteVehicles(id).subscribe(
      (data: any) => {
        alert('deleted successfully');
        location.reload();
      },
      (error: any) => {
        alert('Internal Server Error');
      }
    );
  }
}
